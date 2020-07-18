const { Sequelize, Photo, User } = require('../models');

const Op = Sequelize.Op;

exports.getUser = async (req, res) => {
    const { uid } = req.params;
    const { latestPhotos } = req.query;
    let user = [], status = 200;

    let query = {
        attributes: { exclude: ['id'] },
        where: { uid },
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

    res.status(status);
    res.json(user);
};

exports.getUserPhotos = async (req, res) => {
    const { uid: userUid } = req.params;
    const { beforeId } = req.query;
    let photoArray = [], status = 200;

    let query = {
        attributes: { exclude: Photo.excludedAttrs },
        where: { userUid },
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
        photoArray = await Photo.findAll(query);
    }
    catch (error) {
        console.error(error);
        status = 404;
    }

    res.status(status);
    res.json(photoArray);
};