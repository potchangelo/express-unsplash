'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photo.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userUid',
        targetKey: 'uid'
      });
      Photo.hasOne(models.PhotoUrl, {
        as: 'photoUrl',
        foreignKey: 'photoUid',
        sourceKey: 'uid',
      });
      Photo.includedUser = {
        model: models.User, as: 'user',
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
        include: [{
          model: models.UserAvatarUrl, as: 'avatar',
          attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'userUid'] }
        }]
      };
      Photo.includedUrl = {
        model: models.PhotoUrl, as: 'photoUrl',
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'photoUid'] }
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