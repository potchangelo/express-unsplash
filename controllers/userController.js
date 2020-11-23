const { Sequelize, User } = require('../models');

const Op = Sequelize.Op;

const ERROR_NOT_FOUND = 40004;
const ERROR_GENERAL = 50000;

exports.getUser = async (req, res) => {
    // - Data
    const { username } = req.params;
    const { includedPhotos, photosBeforeId } = req.query;

    // - Query
    const query = { where: { username } };
    let photoQuery = null;
    if (includedPhotos === '1') {
        photoQuery = { ...User.lazyIncludedPhotos };
        if (!!photosBeforeId) {
            photoQuery.where = { id: { [Op.lt]: photosBeforeId } };
        }
    }

    // - Get
    let userModel = null, photoModelArray = null;
    try {
        userModel = await User.scope('includedAvatar').findOne(query);
        if (!userModel) throw new Error('Not found');
        if (includedPhotos === '1') {
            photoModelArray = await userModel.getPhotos(photoQuery);
        }
    }
    catch (error) {
        console.error(error);
        if (error.message === 'Not found') {
            return res.status(404).json({
                errorCode: ERROR_NOT_FOUND,
                errorMessage: 'User not found'
            });
        }
        return res.status(500).json({
            errorCode: ERROR_GENERAL,
            errorMessage: 'Error on get user'
        });
    }

    // - Result
    const user = userModel.toJSON();
    if (!!photoModelArray) user.photos = photoModelArray;
    res.status(200).json({ user });
};

exports.getRandomUsers = async (req, res) => {
    // - Query
    const query = {
        order: Sequelize.literal('rand()'),
        limit: 12
    };

    // - Get
    let userArray = [];
    try {
        userArray = await User.scope('includedAvatar').findAll(query);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            errorCode: ERROR_GENERAL,
            errorMessage: 'Error on get random users'
        });
    }

    // - Result
    res.status(200).json({ users: userArray });
};