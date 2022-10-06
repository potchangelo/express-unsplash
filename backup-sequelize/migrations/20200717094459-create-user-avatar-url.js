'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserAvatarUrls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userUid: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        references: {
          model: 'Users',
          key: 'uid',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      urlSmall: {
        type: Sequelize.TEXT,
      },
      urlMedium: {
        type: Sequelize.TEXT,
      },
      urlLarge: {
        type: Sequelize.TEXT,
      },
      creditUser: {
        type: Sequelize.STRING,
      },
      creditUserLink: {
        type: Sequelize.TEXT,
      },
      creditPhotoLink: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserAvatarUrls');
  },
};
