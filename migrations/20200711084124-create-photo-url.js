'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PhotoUrls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      photoUid: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Photos',
          key: 'uid'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      urlThumbnail: {
        type: Sequelize.TEXT
      },
      urlSmall: {
        type: Sequelize.TEXT
      },
      urlMedium: {
        type: Sequelize.TEXT
      },
      urlLarge: {
        type: Sequelize.TEXT
      },
      urlOriginal: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PhotoUrls');
  }
};