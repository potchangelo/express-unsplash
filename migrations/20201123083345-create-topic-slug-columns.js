'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add column
    await queryInterface.addColumn('Topics', 'slug', {
      type: Sequelize.STRING,
      after: 'uid'
    });

    // Add slug to table
    const rows = await queryInterface.sequelize.query(
      'SELECT uid, title FROM Topics', {
        type: queryInterface.sequelize.QueryTypes.SELECT
    });
    await Promise.all(rows.map(async (row) => {
      const slug = row.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
      return await queryInterface.sequelize.query(
        `UPDATE Topics ` + 
        `SET slug='${slug}' ` + 
        `WHERE uid='${row.uid}';`
      );
    }));

    // Set column
    await queryInterface.changeColumn('Topics', 'slug', {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Topics', 'slug');
  }
};
