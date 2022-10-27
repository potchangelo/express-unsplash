const prisma = require('../client');

const jsonPhotosGroups = require('./data/photosGroups.json');
const jsonPhotosSrcsGroups = require('./data/photosSrcsGroups.json');

module.exports = async () => {
  for (let i = 0; i < jsonPhotosGroups.length; i++) {
    const jsonPhotos = jsonPhotosGroups[i];
    const jsonPhotosSrcs = jsonPhotosSrcsGroups[i];

    const seededPhotos = await Promise.all(
      jsonPhotos.map(async (photo, index) => {
        const { userUid, ...data } = photo;
        const photoSrc = jsonPhotosSrcs[index];
        const { photoUid, ...srcData } = photoSrc;
        return prisma.photo.upsert({
          create: {
            ...data,
            user: { connect: { uid: userUid } },
            src: { create: { ...srcData } },
          },
          update: data,
          where: { uid: photo.uid },
        });
      })
    );

    console.log(`Seed photos set-${i} x ${seededPhotos.length}`);
  }
};
