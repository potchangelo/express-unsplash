'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TopicCoverUrl extends Model {
    static associate(models) {
      TopicCoverUrl.belongsTo(models.Topic, {
        as: 'topic',
        foreignKey: 'topicUid',
        targetKey: 'uid',
      });
    }
  }
  TopicCoverUrl.init(
    {
      small: {
        type: DataTypes.TEXT,
      },
      medium: {
        type: DataTypes.TEXT,
      },
      large: {
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
      modelName: 'TopicCoverUrl',
    }
  );
  return TopicCoverUrl;
};
