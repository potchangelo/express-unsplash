'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhotoUrl extends Model {
    static associate(models) {
      PhotoUrl.belongsTo(models.Photo, {
        as: 'photo',
        foreignKey: 'photoUid',
        targetKey: 'uid',
      });
    }
  }
  PhotoUrl.init(
    {
      thumbnail: {
        type: DataTypes.TEXT,
      },
      small: {
        type: DataTypes.TEXT,
      },
      medium: {
        type: DataTypes.TEXT,
      },
      large: {
        type: DataTypes.TEXT,
      },
      original: {
        type: DataTypes.TEXT,
      },
      creditUser: {
        type: DataTypes.STRING,
      },
      creditUserLink: {
        type: DataTypes.TEXT,
      },
      creditPhotoLink: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'PhotoUrl',
    }
  );
  return PhotoUrl;
};
