const { Photo, PhotoUrl, User } = require('../models');

exports.getPhotos = async (req, res) => {
    let photoArray = [], status = 200;
    try {
        photoArray = await Photo.findAll({
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