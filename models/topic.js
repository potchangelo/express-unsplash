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