'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PhotoUrls', [
      {
        photoUid: '5jtcj402ca',
        thumbnail:
          'https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'Steffen Muldbjerg',
        creditUserLink:
          'https://unsplash.com/@muldbjerg?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/nMfmwgyZn3I',
        createdAt: new Date('2020-07-01 09:30'),
        updatedAt: new Date('2020-07-01 09:30'),
      },
      {
        photoUid: 'yth45984o8',
        thumbnail:
          'https://images.unsplash.com/photo-1531817681549-404231e6ffda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1531817681549-404231e6ffda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1531817681549-404231e6ffda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1531817681549-404231e6ffda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1531817681549-404231e6ffda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'Kristian Egelund',
        creditUserLink:
          'https://unsplash.com/@kristianegelund?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/FaD-Y5atnT4',
        createdAt: new Date('2020-07-01 15:37'),
        updatedAt: new Date('2020-07-01 15:37'),
      },
      {
        photoUid: '45hfxg156w',
        thumbnail:
          'https://images.unsplash.com/photo-1527455425643-782083b04d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1527455425643-782083b04d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1527455425643-782083b04d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1527455425643-782083b04d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1527455425643-782083b04d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'Tom Juggins',
        creditUserLink:
          'https://unsplash.com/@tomjuggins_uk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/AWguZEkl5dg',
        createdAt: new Date('2020-07-01 15:42'),
        updatedAt: new Date('2020-07-01 15:42'),
      },
      {
        photoUid: 'uyesth5614',
        thumbnail:
          'https://images.unsplash.com/photo-1558443968-68267a520ef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1558443968-68267a520ef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1558443968-68267a520ef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1558443968-68267a520ef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1558443968-68267a520ef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'Mihai Moisa',
        creditUserLink:
          'https://unsplash.com/@moisamihai092?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/8HDWBobi7MI',
        createdAt: new Date('2020-07-01 15:45'),
        updatedAt: new Date('2020-07-01 15:45'),
      },
      {
        photoUid: 'f54hjfg154',
        thumbnail:
          'https://images.unsplash.com/photo-1557874471-82f9cdb1cb40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1557874471-82f9cdb1cb40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1557874471-82f9cdb1cb40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1557874471-82f9cdb1cb40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1557874471-82f9cdb1cb40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'Marius Niveri',
        creditUserLink:
          'https://unsplash.com/@m4r1vs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/fmM3lFLx4xE',
        createdAt: new Date('2020-07-02 10:21'),
        updatedAt: new Date('2020-07-02 10:21'),
      },
      {
        photoUid: 'opg8se156s',
        thumbnail:
          'https://images.unsplash.com/photo-1594491084435-07c418f83735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1594491084435-07c418f83735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1594491084435-07c418f83735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1594491084435-07c418f83735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1594491084435-07c418f83735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'Eiliv-Sonas Aceron',
        creditUserLink:
          'https://unsplash.com/@shootdelicious?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/fhsEQW5ibw0',
        createdAt: new Date('2020-07-02 13:47'),
        updatedAt: new Date('2020-07-02 13:47'),
      },
      {
        photoUid: 'us8e53ikg9',
        thumbnail:
          'https://images.unsplash.com/photo-1594075731547-8c705bb69e50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1594075731547-8c705bb69e50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1594075731547-8c705bb69e50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1594075731547-8c705bb69e50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1594075731547-8c705bb69e50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'Alexander W',
        creditUserLink:
          'https://unsplash.com/@jawfox_photography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/F-6v14W67Ak',
        createdAt: new Date('2020-07-02 18:54'),
        updatedAt: new Date('2020-07-02 18:54'),
      },
      {
        photoUid: 'rjtu45r3e4',
        thumbnail:
          'https://images.unsplash.com/photo-1559070226-d4cad642bede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=240&q=80',
        small:
          'https://images.unsplash.com/photo-1559070226-d4cad642bede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
        medium:
          'https://images.unsplash.com/photo-1559070226-d4cad642bede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
        large:
          'https://images.unsplash.com/photo-1559070226-d4cad642bede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
        original:
          'https://images.unsplash.com/photo-1559070226-d4cad642bede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
        creditUser: 'Steffen Muldbjerg',
        creditUserLink:
          'https://unsplash.com/@muldbjerg?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        creditPhotoLink: 'https://unsplash.com/photos/L7FObluE5Hg',
        createdAt: new Date('2020-07-03 07:53'),
        updatedAt: new Date('2020-07-03 07:53'),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('PhotoUrls', {
      photoUid: {
        [Op.in]: [
          '5jtcj402ca',
          'yth45984o8',
          '45hfxg156w',
          'uyesth5614',
          'f54hjfg154',
          'opg8se156s',
          'us8e53ikg9',
          'rjtu45r3e4',
        ],
      },
    });
  },
};
