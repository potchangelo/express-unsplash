const { Sequelize, Topic } = require('../models');

exports.getTopics = async (req, res) => {
    let topicArray = [], status = 200;

    try {
        topicArray = await Topic.findAll({
            attributes: { exclude: Topic.excludedAttrs },
            include: [],
            order: [
                ['isFeatured', 'DESC'],
                ['createdAt', 'DESC']
            ]
        });
    }
    catch (error) {
        console.error(error);
        status = 404;
    }

    res.status(status).json(topicArray);
};