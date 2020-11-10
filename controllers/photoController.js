const { Sequelize, Photo } = require('../models');

const Op = Sequelize.Op;

const ERROR_GENERAL = 50000;

exports.getPhotos = async (req, res) => {
    // - Data
    const { beforeId } = req.query;
    
    // - Query
    let query = {
        order: [['createdAt', 'DESC']],
        limit: 12
    };
    if (!!beforeId) {
        query.where = { id: { [Op.lt]: beforeId } };
    }

    // - Get
    let photoArray = [];
    try {
        photoArray = await Photo.scope('includedAll').findAll(query);
    }
    catch (error) {
        console.error(error.message);
        return res.status(500).json({
            errorCode: ERROR_GENERAL,
            errorMessage: 'Error on get photos'
        });
    }

    // - Result
    res.status(200).json({ photoArray });
};

exports.getPhoto = async (req, res) => {
    // - Query
    const query = { where: { uid: req.params.uid } };

    // - Get
    let photo = null;
    try {
        photo = await Photo.scope('includedAll').findOne(query);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            errorCode: ERROR_GENERAL,
            errorMessage: 'Error on get photo'
        });
    }

    // - Result
    res.status(200).json({ photo });
};

exports.getRandomPhoto = async (req, res) => {
    // - Query
    const query = { order: Sequelize.literal('rand()') };

    // - Get
    let photo = null;
    try {
        photo = await Photo.scope('includedAll').findOne(query);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            errorCode: ERROR_GENERAL,
            errorMessage: 'Error on get random photo'
        });
    }

    // - Result
    res.status(200).json({ photo });
};