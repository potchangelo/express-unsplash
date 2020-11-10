const { Sequelize, Photo, User } = require('../models');

const Op = Sequelize.Op;

const ERROR_GENERAL = 50000;

exports.getUser = async (req, res) => {
    // - Data
    const { username } = req.params;
    const { latestPhotos, beforeId } = req.query;

    // - Query
    const query = { where: { username } };
    let photoQuery = null;
    if (latestPhotos === '1') {
        photoQuery = { ...User.lazyIncludedPhotos };
        if (!!beforeId) {
            photoQuery.where = { id: { [Op.lt]: beforeId } };
        }
    }

    // - Get
    let userModel = null, photoModelArray = null;
    try {
        userModel = await User.scope('includedAvatar').findOne(query);
        if (latestPhotos === '1') {
            photoModelArray = await userModel.getPhotos(photoQuery);
        }
    }
    catch (error) {
        console.error(error);
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

exports.getUserPhotos = async (req, res) => {
    const { username } = req.params;
    const { beforeId } = req.query;
    let photoArray = [], status = 200;

    let query = {
        attributes: { exclude: Photo.excludedAttrs },
        where: {},
        include: [
            {
                model: User, as: 'user',
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
                include: [User.includedAvatar]
            },
            Photo.includedUrl
        ],
        order: [['createdAt', 'DESC']],
        limit: 12
    };
    if (!!beforeId) {
        query.where.id = { [Op.lt]: beforeId };
    }

    try {
        const user = await User.findOne({ where: { username } });
        if (!!user) {
            query.where.userUid = user.uid;
            photoArray = await Photo.findAll(query);
        }
    }
    catch (error) {
        console.error(error);
        status = 404;
    }

    res.status(status).json(photoArray);
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