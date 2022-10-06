'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Remove columns
    await queryInterface.removeColumn('Photos', 'creditUser');
    await queryInterface.removeColumn('Photos', 'creditUserLink');
    await queryInterface.removeColumn('Photos', 'creditPhotoLink');
  },

  down: async (queryInterface, Sequelize) => {
    // Add columns
    await queryInterface.addColumn('Photos', 'creditUser', {
      type: Sequelize.TEXT,
      after: 'description',
    });
    await queryInterface.addColumn('Photos', 'creditUserLink', {
      type: Sequelize.TEXT,
      after: 'creditUser',
    });
    await queryInterface.addColumn('Photos', 'creditPhotoLink', {
      type: Sequelize.TEXT,
      after: 'creditUserLink',
    });
  },
};
