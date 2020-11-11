const { Sequelize, Topic } = require('../models');

const Op = Sequelize.Op;

const ERROR_GENERAL = 50000;

exports.getTopics = async (req, res) => {
    // - Query
    const query = {
        order: [
            ['isFeatured', 'DESC'],
            ['createdAt', 'DESC']
        ]
    };
    // - Get
    let topicArray = [];
    try {
        topicArray = await Topic.scope('includedCover').findAll(query);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            errorCode: ERROR_GENERAL,
            errorMessage: 'Error on get topics'
        });
    }

    // - Result
    res.status(200).json({ topics: topicArray });
};

exports.getTopic = async (req, res) => {
    // - Data
    const { uid } = req.params;
    const { includedPhotos, photosBeforeId } = req.query;

    // - Query
    const query = { where: { uid } };
    let photoQuery = null;
    if (includedPhotos === '1') {
        photoQuery = { ...Topic.lazyIncludedPhotos };
        if (!!photosBeforeId) {
            photoQuery.where = { id: { [Op.lt]: photosBeforeId } };
        }
    }

    // - Get
    let topicModel = null, photoModelArray = null;
    try {
        topicModel = await Topic.scope('includedCover').findOne(query);
        if (includedPhotos === '1') {
            photoModelArray = await topicModel.getPhotos(photoQuery);
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            errorCode: ERROR_GENERAL,
            errorMessage: 'Error on get topic'
        });
    }

    // - Result
    const topic = topicModel.toJSON();
    if (!!photoModelArray) topic.photos = photoModelArray;
    res.status(200).json({ topic });
};