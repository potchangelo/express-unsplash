'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhotoTopic extends Model {
    static associate(models) {
      // define association here
    }
  };

  PhotoTopic.init({
    photoUid: {
      allowNull: false,
      type: DataTypes.STRING
    },
    topicUid: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'PhotoTopic',
  });
  
  return PhotoTopic;
};