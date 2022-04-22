'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PhotoTopics', [
      {
        photoUid: 'rjtu45r3e4',
        topicUid: 'ezrtsi7uy8',
        createdAt: new Date('2020-11-11 11:46'),
        updatedAt: new Date('2020-11-11 11:46'),
      },
      {
        photoUid: '0jy84iahge',
        topicUid: 'y15sew5687',
        createdAt: new Date('2020-11-11 11:46'),
        updatedAt: new Date('2020-11-11 11:46'),
      },
      {
        photoUid: 'b0xdi4tois',
        topicUid: '615ol8futg',
        createdAt: new Date('2020-11-11 11:46'),
        updatedAt: new Date('2020-11-11 11:46'),
      },
      {
        photoUid: '40j8hi9oye',
        topicUid: '615ol8futg',
        createdAt: new Date('2020-11-11 11:46'),
        updatedAt: new Date('2020-11-11 11:46'),
      },
      {
        photoUid: 'pa7y345w90',
        topicUid: 'y15sew5687',
        createdAt: new Date('2020-11-11 11:46'),
        updatedAt: new Date('2020-11-11 11:46'),
      },
      {
        photoUid: 'vt2q40iouo',
        topicUid: 'atvji0it74',
        createdAt: new Date('2020-11-11 11:46'),
        updatedAt: new Date('2020-11-11 11:46'),
      },
      {
        photoUid: 'djxtmry6if',
        topicUid: 'atvji0it74',
        createdAt: new Date('2020-11-11 11:46'),
        updatedAt: new Date('2020-11-11 11:46'),
      },
      {
        photoUid: 'atyijrw4gk',
        topicUid: '615ol8futg',
        createdAt: new Date('2020-11-11 11:46'),
        updatedAt: new Date('2020-11-11 11:46'),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('PhotoTopics', {
      createdAt: {
        [Op.gt]: new Date('2020-11-11 11:45'),
        [Op.lt]: new Date('2020-11-11 11:47'),
      },
    });
  },
};

// Photo 8-15
