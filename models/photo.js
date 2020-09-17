'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      Photo.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userUid',
        targetKey: 'uid'
      });
      Photo.hasOne(models.PhotoUrl, {
        as: 'url',
        foreignKey: 'photoUid',
        sourceKey: 'uid',
      });
      Photo.belongsToMany(models.Topic, {
        as: 'topics',
        through: models.PhotoTopic,
        sourceKey: 'uid',
        foreignKey: 'photoUid',
        otherKey: 'topicUid',
        targetKey: 'uid'
      });
      Photo.includedUser = {
        model: models.User, as: 'user',
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
        include: [{
          model: models.UserAvatarUrl, as: 'avatarUrl',
          attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'userUid'] }
        }]
      };
      Photo.includedUrl = {
        model: models.PhotoUrl, as: 'url',
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'photoUid'] }
      },
      Photo.includedTopics = {
        model: models.Topic, as: 'topics',
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
        through: { attributes: [] }
      }
    }
  };
  
  Photo.init({
    uid: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    width: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    height: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT
    },
    creditUser: {
      type: DataTypes.STRING,
    },
    creditUserLink: {
      type: DataTypes.TEXT
    },
    creditPhotoLink: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Photo',
  });

  Photo.excludedAttrs = ['userUid'];

  return Photo;
};