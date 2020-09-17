'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PhotoTopics', [
      {
        photoUid: '5jtcj402ca',
        topicUid: 'ezrtsi7uy8',
        createdAt: new Date("2020-09-16 16:19"),
        updatedAt: new Date("2020-09-16 16:19")
      },
      {
        photoUid: 'yth45984o8',
        topicUid: 'ezrtsi7uy8',
        createdAt: new Date("2020-09-16 16:19"),
        updatedAt: new Date("2020-09-16 16:19")
      },
      {
        photoUid: '45hfxg156w',
        topicUid: 'ezrtsi7uy8',
        createdAt: new Date("2020-09-16 16:19"),
        updatedAt: new Date("2020-09-16 16:19")
      },
      {
        photoUid: 'uyesth5614',
        topicUid: 'ezrtsi7uy8',
        createdAt: new Date("2020-09-16 16:19"),
        updatedAt: new Date("2020-09-16 16:19")
      },
      {
        photoUid: 'f54hjfg154',
        topicUid: '615ol8futg',
        createdAt: new Date("2020-09-16 16:19"),
        updatedAt: new Date("2020-09-16 16:19")
      },
      {
        photoUid: 'opg8se156s',
        topicUid: 'y15sew5687',
        createdAt: new Date("2020-09-16 16:19"),
        updatedAt: new Date("2020-09-16 16:19")
      },
      {
        photoUid: 'us8e53ikg9',
        topicUid: 'y15sew5687',
        createdAt: new Date("2020-09-16 16:19"),
        updatedAt: new Date("2020-09-16 16:19")
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('PhotoTopics', {
      createdAt: {
        [Op.gt]: new Date("2020-09-16 16:18"),
        [Op.lt]: new Date("2020-09-16 16:20")
      }
    });
  }
};

// Photo 1 - 7