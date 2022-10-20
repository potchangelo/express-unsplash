const prisma = require('../client');

const jsonTopics = require('./data/topics.json');
const jsonTopicsCovers = require('./data/topicsCovers.json');

module.exports = async () => {
  const seededTopics = await Promise.all(
    jsonTopics.map((topic, index) => {
      const { photos, ...data } = topic;
      const { topicUid, ...topicCover } = jsonTopicsCovers[index];
      return prisma.topic.upsert({
        create: {
          ...data,
          cover: { create: topicCover },
          photos: {
            connect: photos.map(puid => ({ uid: puid }))
          }
        },
        update: data,
        where: { uid: data.uid }
      });
    })
  );
  console.log(`Seed topics x ${seededTopics.length}`);
};
