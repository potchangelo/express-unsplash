'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PhotoTopics', [
      {
        photoUid: 'v9ijbdnv23',
        topicUid: 'a8gm6yr56e',
        createdAt: new Date('2020-11-11 11:56'),
        updatedAt: new Date('2020-11-11 11:56'),
      },
      {
        photoUid: 'ky5hr4t02f',
        topicUid: 'zxi61i15ok',
        createdAt: new Date('2020-11-11 11:56'),
        updatedAt: new Date('2020-11-11 11:56'),
      },
      {
        photoUid: 'granwz490n',
        topicUid: 'y15sew5687',
        createdAt: new Date('2020-11-11 11:56'),
        updatedAt: new Date('2020-11-11 11:56'),
      },
      {
        photoUid: '7r5yik7ygv',
        topicUid: 'ezrtsi7uy8',
        createdAt: new Date('2020-11-11 11:56'),
        updatedAt: new Date('2020-11-11 11:56'),
      },
      {
        photoUid: 'ni053cn9vf',
        topicUid: '615ol8futg',
        createdAt: new Date('2020-11-11 11:56'),
        updatedAt: new Date('2020-11-11 11:56'),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('PhotoTopics', {
      createdAt: {
        [Op.gt]: new Date('2020-11-11 11:55'),
        [Op.lt]: new Date('2020-11-11 11:57'),
      },
    });
  },
};

// Photo 24-28
