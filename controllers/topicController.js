const { Sequelize, Topic } = require('../models');

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
        topicArray = await Topic.findAll(query);
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
    // - Query
    const query = { where: { uid: req.params.uid } };

    // - Get
    let topic = null;
    try {
        topic = await Topic.findOne(query);
        const photos = await topic.getPhotos({ order: [['createdAt', 'DESC']] });
        console.log(photos);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            errorCode: ERROR_GENERAL,
            errorMessage: 'Error on get topic'
        });
    }

    // - Result
    res.status(200).json({ topic });
};