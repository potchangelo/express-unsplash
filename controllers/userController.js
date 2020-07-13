const { Photo, User } = require('../models');

exports.getUser = async (req, res) => {
    const { uid } = req.params;
    const { includedPhotos } = req.query;
    let user = [], status = 200;

    let query = { where: { uid } };
    if (includedPhotos === '1') {
        query.include = [{ 
            model: Photo, as: 'photos', 
            separate: true, 
            order: [ ['createdAt', 'DESC'] ],
            limit: 2 
        }];
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