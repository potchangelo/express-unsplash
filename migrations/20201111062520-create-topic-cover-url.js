'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TopicCoverUrls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      topicUid: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        references: {
          model: 'Topics',
          key: 'uid'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      small: {
        type: Sequelize.TEXT
      },
      medium: {
        type: Sequelize.TEXT
      },
      large: {
        type: Sequelize.TEXT
      },
      creditUser: {
        type: Sequelize.STRING,
      },
      creditUserLink: {
        type: Sequelize.TEXT
      },
      creditPhotoLink: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TopicCoverUrls');
  }
};