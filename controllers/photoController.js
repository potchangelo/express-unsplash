const { Sequelize, Photo } = require('../models');

const Op = Sequelize.Op;

exports.getPhotos = async (req, res) => {
    const { beforeId } = req.query;
    let photoArray = [], status = 200;

    let query = {
        attributes: { exclude: Photo.excludedAttrs },
        include: [Photo.includedUser, Photo.includedUrl],
        order: [['createdAt', 'DESC']],
        limit: 12
    };
    if (!!beforeId) {
        query.where = { id: { [Op.lt]: beforeId } };
    }

    try {
        photoArray = await Photo.findAll(query);
    }
    catch (error) {
        console.error(error);
        status = 404;
    }

    res.status(status).json(photoArray);
};

exports.getPhoto = async (req, res) => {
    let photo = null, status = 200;

    try {
        photo = await Photo.findOne({
            attributes: { exclude: Photo.excludedAttrs },
            where: { uid: req.params.uid },
            include: [Photo.includedUser, Photo.includedUrl],
        });
    }
    catch (error) {
        console.error(error);
        status = 404;
    }

    res.status(status).json(photo);
};