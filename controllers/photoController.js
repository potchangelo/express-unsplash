const { Sequelize, Photo, PhotoUrl, User } = require('../models');

const Op = Sequelize.Op;

exports.getPhotos = async (req, res) => {
    const { beforeId } = req.query;
    let photoArray = [], status = 200;

    let query = {
        include: [
            { model: User, as: 'user' },
            { model: PhotoUrl, as: 'photoUrl' }
        ],
        order: [['createdAt', 'DESC']],
        limit: 5
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

    res.status(status);
    res.json(photoArray);
};

exports.getPhoto = async (req, res) => {
    let photo = null, status = 200;

    try {
        photo = await Photo.findOne({
            where: { uid: req.params.uid },
            include: [
                { model: User, as: 'user' },
                { model: PhotoUrl, as: 'photoUrl' }
            ]
        });
    }
    catch (error) {
        console.error(error);
        status = 404;
    }
    
    res.status(status);
    res.json(photo);
};