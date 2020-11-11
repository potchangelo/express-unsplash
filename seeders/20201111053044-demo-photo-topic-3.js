'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PhotoTopics', [
      {
        photoUid: 's5ey3j0oip',
        topicUid: 'atvji0it74',
        createdAt: new Date("2020-11-11 11:51"),
        updatedAt: new Date("2020-11-11 11:51")
      },
      {
        photoUid: 'xpdmf4nmb9',
        topicUid: 'a8gm6yr56e',
        createdAt: new Date("2020-11-11 11:51"),
        updatedAt: new Date("2020-11-11 11:51")
      },
      {
        photoUid: 'atngiz0et1',
        topicUid: 'ezrtsi7uy8',
        createdAt: new Date("2020-11-11 11:51"),
        updatedAt: new Date("2020-11-11 11:51")
      },
      {
        photoUid: 'au5hre3t0b',
        topicUid: '615ol8futg',
        createdAt: new Date("2020-11-11 11:51"),
        updatedAt: new Date("2020-11-11 11:51")
      },
      {
        photoUid: 'nm735i0aew',
        topicUid: 'a8gm6yr56e',
        createdAt: new Date("2020-11-11 11:51"),
        updatedAt: new Date("2020-11-11 11:51")
      },
      {
        photoUid: 'j03mbmdfp4',
        topicUid: 'a8gm6yr56e',
        createdAt: new Date("2020-11-11 11:51"),
        updatedAt: new Date("2020-11-11 11:51")
      },
      {
        photoUid: 'ygjawhjw05',
        topicUid: '615ol8futg',
        createdAt: new Date("2020-11-11 11:51"),
        updatedAt: new Date("2020-11-11 11:51")
      },
      {
        photoUid: 'ygjawhjw05',
        topicUid: 'ezrtsi7uy8',
        createdAt: new Date("2020-11-11 11:51"),
        updatedAt: new Date("2020-11-11 11:51")
      },
      {
        photoUid: 'njetsoi939',
        topicUid: 'a8gm6yr56e',
        createdAt: new Date("2020-11-11 11:51"),
        updatedAt: new Date("2020-11-11 11:51")
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('PhotoTopics', {
      createdAt: {
        [Op.gt]: new Date("2020-11-11 11:50"),
        [Op.lt]: new Date("2020-11-11 11:52")
      }
    });
  }
};

// Photo 16-23