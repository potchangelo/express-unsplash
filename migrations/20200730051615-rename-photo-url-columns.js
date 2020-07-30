'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.renameColumn('PhotoUrls', 'urlThumbnail', 'thumbnail', { transaction });
      await queryInterface.renameColumn('PhotoUrls', 'urlSmall', 'small', { transaction });
      await queryInterface.renameColumn('PhotoUrls', 'urlMedium', 'medium', { transaction });
      await queryInterface.renameColumn('PhotoUrls', 'urlLarge', 'large', { transaction });
      await queryInterface.renameColumn('PhotoUrls', 'urlOriginal', 'original', { transaction });
      await transaction.commit();
    }
    catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.renameColumn('PhotoUrls', 'thumbnail', 'urlThumbnail', { transaction });
      await queryInterface.renameColumn('PhotoUrls', 'small', 'urlSmall', { transaction });
      await queryInterface.renameColumn('PhotoUrls', 'medium', 'urlMedium', { transaction });
      await queryInterface.renameColumn('PhotoUrls', 'large', 'urlLarge', { transaction });
      await queryInterface.renameColumn('PhotoUrls', 'original', 'urlOriginal', { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};
