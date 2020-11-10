'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate(models) {
      Topic.belongsToMany(models.Photo, { 
        as: 'photos',
        through: models.PhotoTopic,
        sourceKey: 'uid',
        foreignKey: 'topicUid',
        otherKey: 'photoUid',
        targetKey: 'uid'
      });

      Topic.lazyIncludedPhotos = {
        include: [
          {
            model: models.PhotoUrl, as: 'url',
            attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'photoUid'] }
          },
          {
            model: models.User, as: 'user',
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
            include: [{
              model: models.UserAvatarUrl, as: 'avatarUrl',
              attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'userUid'] }
            }]
          },
          {
            model: models.Topic, as: 'topics',
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
            through: { attributes: [] }
          }
        ],
        joinTableAttributes: [],
        order: [['createdAt', 'DESC']],
        limit: 12
      };
    }
  };

  Topic.init({
    uid: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    isFeatured: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'Topic',
    defaultScope: {
      attributes: { exclude: ['id'] },
    }
  });

  return Topic;
};