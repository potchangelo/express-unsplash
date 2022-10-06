const { Sequelize, Photo, User } = require('../models');

const Op = Sequelize.Op;

const ERROR_GENERAL = 50000;

exports.searchPhotos = async (req, res) => {
  // - Data
  const { q, beforeId } = req.query;

  // - Empty results
  if (!q) {
    return res.status(200).json({ photos: [] });
  }

  // - Query
  const query = {
    where: { description: { [Op.substring]: q } },
    order: [['createdAt', 'DESC']],
    limit: 12,
  };
  if (!!beforeId) {
    query.where.id = { [Op.lt]: beforeId };
  }

  // - Get
  let photoArray = [];
  try {
    photoArray = await Photo.scope('includedAll').findAll(query);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      errorCode: ERROR_GENERAL,
      errorMessage: 'Error on get photos',
    });
  }

  // - Result
  res.status(200).json({ photos: photoArray });
};

exports.searchUsers = async (req, res) => {
  // - Data
  const { q, beforeId } = req.query;

  // - Empty results
  if (!q) {
    return res.status(200).json({ users: [] });
  }

  // - Query
  const query = {
    where: {
      [Op.or]: [{ username: { [Op.substring]: q } }, { displayName: { [Op.substring]: q } }],
    },
    limit: 12,
  };
  if (!!beforeId) {
    query.where.id = { [Op.lt]: beforeId };
  }

  // - Get
  let userArray = null;
  try {
    userArray = await User.scope('includedPhotosOnSearch').findAll(query);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      errorCode: ERROR_GENERAL,
      errorMessage: 'Error on get users',
    });
  }

  // - Result
  res.status(200).json({ users: userArray });
};
