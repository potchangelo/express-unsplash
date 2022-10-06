'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PhotoUrls', [
      {
        photoUid: '0jy84iahge',
        thumbnail:
          'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'Food Photographer David Fedulov',
        creditUserLink:
          'https://unsplash.com/@phototastyfood?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/X92WLoaQ1_o',
        createdAt: new Date('2020-07-05 12:41'),
        updatedAt: new Date('2020-07-05 12:41'),
      },
      {
        photoUid: 'b0xdi4tois',
        thumbnail:
          'https://images.unsplash.com/photo-1543877998-218e8883c010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1543877998-218e8883c010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1543877998-218e8883c010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1543877998-218e8883c010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1543877998-218e8883c010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'Damir Spanic',
        creditUserLink:
          'https://unsplash.com/@spanic?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/9fwgefhyOBU',
        createdAt: new Date('2020-07-05 16:58'),
        updatedAt: new Date('2020-07-05 16:58'),
      },
      {
        photoUid: '40j8hi9oye',
        thumbnail:
          'https://images.unsplash.com/photo-1559628019-e73aae8d2a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1559628019-e73aae8d2a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1559628019-e73aae8d2a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1559628019-e73aae8d2a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1559628019-e73aae8d2a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'Robery Gramner',
        creditUserLink:
          'https://unsplash.com/@robert_gramner?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/E56cTF65xFw',
        createdAt: new Date('2020-07-06 07:43'),
        updatedAt: new Date('2020-07-06 07:43'),
      },
      {
        photoUid: 'pa7y345w90',
        thumbnail:
          'https://images.unsplash.com/photo-1593787614887-004b2ffb0057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1593787614887-004b2ffb0057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1593787614887-004b2ffb0057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1593787614887-004b2ffb0057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1593787614887-004b2ffb0057?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'Louis Hansel @shotsoflouis',
        creditUserLink:
          'https://unsplash.com/@louishansel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/W7x1gJtFZwM',
        createdAt: new Date('2020-07-08 15:04'),
        updatedAt: new Date('2020-07-08 15:04'),
      },
      {
        photoUid: 'vt2q40iouo',
        thumbnail:
          'https://images.unsplash.com/photo-1583969430751-c4847217b32e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1583969430751-c4847217b32e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1583969430751-c4847217b32e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1583969430751-c4847217b32e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1583969430751-c4847217b32e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'LOGAN WEAVER',
        creditUserLink:
          'https://unsplash.com/@lgnwvr?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/SA4HtnOybII',
        createdAt: new Date('2020-07-08 19:35'),
        updatedAt: new Date('2020-07-08 19:35'),
      },
      {
        photoUid: 'djxtmry6if',
        thumbnail:
          'https://images.unsplash.com/photo-1516208813382-cbaf53501037?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1516208813382-cbaf53501037?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1516208813382-cbaf53501037?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1516208813382-cbaf53501037?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1516208813382-cbaf53501037?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'GMB Monkey',
        creditUserLink:
          'https://unsplash.com/@gmb?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/NYCVycvTbek',
        createdAt: new Date('2020-07-09 08:27'),
        updatedAt: new Date('2020-07-09 08:27'),
      },
      {
        photoUid: 'atyijrw4gk',
        thumbnail:
          'https://images.unsplash.com/photo-1589534327678-64e93c0e37b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1589534327678-64e93c0e37b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1589534327678-64e93c0e37b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1589534327678-64e93c0e37b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1589534327678-64e93c0e37b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'Dennis Ottink',
        creditUserLink:
          'https://unsplash.com/@ottink?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/3QuzMVtDlOs',
        createdAt: new Date('2020-07-09 10:22'),
        updatedAt: new Date('2020-07-09 10:22'),
      },
      {
        photoUid: 's5ey3j0oip',
        thumbnail:
          'https://images.unsplash.com/photo-1524190953017-a0e58d1db9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1524190953017-a0e58d1db9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1524190953017-a0e58d1db9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1524190953017-a0e58d1db9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1524190953017-a0e58d1db9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'John Azeka',
        creditUserLink:
          'https://unsplash.com/@jha900?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/bg43g7xTu2M',
        createdAt: new Date('2020-07-11 07:36'),
        updatedAt: new Date('2020-07-11 07:36'),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('PhotoUrls', {
      photoUid: {
        [Op.in]: [
          '0jy84iahge',
          'b0xdi4tois',
          '40j8hi9oye',
          'pa7y345w90',
          'vt2q40iouo',
          'djxtmry6if',
          'atyijrw4gk',
          's5ey3j0oip',
        ],
      },
    });
  },
};
