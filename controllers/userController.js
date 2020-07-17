const { Sequelize, Photo, PhotoUrl, User, UserAvatarUrl } = require('../models');

const Op = Sequelize.Op;

exports.getUser = async (req, res) => {
    const { uid } = req.params;
    const { includedPhotos } = req.query;
    let user = [], status = 200;

    let query = {
        where: { uid },
        include: [{ model: UserAvatarUrl, as: 'avatar' }]
    };
    if (includedPhotos === '1') {
        query.include.push({ 
            model: Photo, as: 'photos', 
            include: [{ model: PhotoUrl, as: 'photoUrl' }],
            separate: true, 
            order: [ ['createdAt', 'DESC'] ],
            limit: 5
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
        where: { userUid },
        include: [
            { 
                model: User, as: 'user',
                include: [{ model: UserAvatarUrl, as: 'avatar' }]
            },
            { model: PhotoUrl, as: 'photoUrl' }
        ],
        order: [ ['createdAt', 'DESC'] ],
        limit: 5
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