'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Photo, {
        as: 'photos',
        foreignKey: 'userUid',
        sourceKey: 'uid'
      });
      User.hasOne(models.UserAvatarUrl, {
        as: 'avatarUrl',
        foreignKey: 'userUid',
        sourceKey: 'uid'
      });

      User.includedAvatar = {
        model: models.UserAvatarUrl, as: 'avatarUrl',
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'userUid'] }
      };
      User.lazyIncludedPhotos = {
        include: [
          {
            model: models.PhotoUrl, as: 'url',
            attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'photoUid'] }
          },
          {
            model: models.Topic, as: 'topics',
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
            through: { attributes: [] }
          }
        ],
        order: [['createdAt', 'DESC']],
        limit: 12
      };

      User.addScope('includedAvatar', {
        attributes: { exclude: ['id'] },
        include: [User.includedAvatar]
      });
    }
  };

  User.init({
    uid: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    displayName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    biography: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: { exclude: ['id'] },
    }
  });

  return User;
};