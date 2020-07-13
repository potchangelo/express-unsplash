const { Photo, User } = require('../models');

exports.user = async (req, res) => {
    let userArray = [];
    try {
        userArray = await User.findAll({
            include: [
                { model: Photo, as: 'photos' }
            ]
        });
    }
    catch (error) {
        console.error(error);
    }
    res.json(userArray);
};