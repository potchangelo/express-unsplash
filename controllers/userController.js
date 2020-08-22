const { Sequelize, Photo, User } = require('../models');

const Op = Sequelize.Op;

exports.getUser = async (req, res) => {
    const { username } = req.params;
    const { latestPhotos } = req.query;
    let user = [], status = 200;

    let query = {
        attributes: { exclude: ['id'] },
        where: { username },
        include: [User.includedAvatar]
    };
    if (latestPhotos === '1') {
        query.include.push({
            model: Photo, as: 'photos',
            attributes: { exclude: Photo.excludedAttrs },
            include: [Photo.includedUrl],
            separate: true,
            order: [['createdAt', 'DESC']],
            limit: 12
        });
    }

    try {
        user = await User.findOne(query);
    }
    catch (error) {
        console.error(error);
        status = 404;
    }

    res.status(status).json(user);
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
    let userArray = [], status = 200;

    try {
        userArray = await User.findAll({
            attributes: { exclude: ['id'] },
            include: [User.includedAvatar],
            order: Sequelize.literal('rand()'),
            limit: 12
        });
    }
    catch (error) {
        console.error(error);
        status = 404;
    }

    res.status(status).json(userArray);
};