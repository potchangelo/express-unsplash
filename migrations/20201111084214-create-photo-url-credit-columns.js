'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add columns
    await queryInterface.addColumn('PhotoUrls', 'creditUser', {
      type: Sequelize.TEXT,
      after: 'original'
    });
    await queryInterface.addColumn('PhotoUrls', 'creditUserLink', {
      type: Sequelize.TEXT,
      after: 'creditUser'
    });
    await queryInterface.addColumn('PhotoUrls', 'creditPhotoLink', {
      type: Sequelize.TEXT,
      after: 'creditUserLink'
    });

    // Add credit to photo url table
    const rows = await queryInterface.sequelize.query(
      'SELECT uid, creditUser, creditUserLink, creditPhotoLink FROM Photos', {
        type: queryInterface.sequelize.QueryTypes.SELECT
    });
    await Promise.all(rows.map(async (row) => {
      return await queryInterface.sequelize.query(
        `UPDATE PhotoUrls ` + 
        `SET creditUser='${row.creditUser}', ` + 
        `creditUserLink='${row.creditUserLink}', ` + 
        `creditPhotoLink='${row.creditPhotoLink}' ` + 
        `WHERE photoUid='${row.uid}';`
      );
    }));
  },

  down: async (queryInterface, Sequelize) => {
    // Remove columns
    await queryInterface.removeColumn('PhotoUrls', 'creditUser');
    await queryInterface.removeColumn('PhotoUrls', 'creditUserLink');
    await queryInterface.removeColumn('PhotoUrls', 'creditPhotoLink');
  }
};
