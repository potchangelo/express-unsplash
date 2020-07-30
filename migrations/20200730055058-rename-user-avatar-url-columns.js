'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.renameColumn('UserAvatarUrls', 'urlSmall', 'small', { transaction });
      await queryInterface.renameColumn('UserAvatarUrls', 'urlMedium', 'medium', { transaction });
      await queryInterface.renameColumn('UserAvatarUrls', 'urlLarge', 'large', { transaction });
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
      await queryInterface.renameColumn('UserAvatarUrls', 'small', 'urlSmall', { transaction });
      await queryInterface.renameColumn('UserAvatarUrls', 'medium', 'urlMedium', { transaction });
      await queryInterface.renameColumn('UserAvatarUrls', 'large', 'urlLarge', { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};
