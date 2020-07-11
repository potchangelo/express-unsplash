'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhotoUrl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PhotoUrl.belongsTo(models.Photo, {
        as: 'photo',
        foreignKey: 'photoUid',
        targetKey: 'uid'
      });
    }
  };
  PhotoUrl.init({
    urlThumbnail: {
      type: DataTypes.TEXT
    },
    urlSmall: {
      type: DataTypes.TEXT
    },
    urlMedium: {
      type: DataTypes.TEXT
    },
    urlLarge: {
      type: DataTypes.TEXT
    },
    urlOriginal: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'PhotoUrl',
  });
  return PhotoUrl;
};