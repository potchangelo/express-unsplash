'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Photo, {
        as: 'photos',
        foreignKey: 'userUid',
        sourceKey: 'uid'
      });
      User.hasOne(models.UserAvatarUrl, {
        as: 'avatar',
        foreignKey: 'userUid',
        sourceKey: 'uid'
      });
      User.includedAvatar = {
        model: models.UserAvatarUrl, as: 'avatar',
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'userUid'] }
      };
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
  });
  return User;
};