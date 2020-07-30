'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAvatarUrl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAvatarUrl.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userUid',
        targetKey: 'uid'
      });
    }
  };
  UserAvatarUrl.init({
    small: {
      type: DataTypes.TEXT
    },
    medium: {
      type: DataTypes.TEXT
    },
    large: {
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
    }
  }, {
    sequelize,
    modelName: 'UserAvatarUrl',
  });
  return UserAvatarUrl;
};