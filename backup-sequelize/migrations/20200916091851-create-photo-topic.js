'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PhotoTopics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      photoUid: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Photos',
          key: 'uid',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      topicUid: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Topics',
          key: 'uid',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
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
    await queryInterface.dropTable('PhotoTopics');
  },
};
