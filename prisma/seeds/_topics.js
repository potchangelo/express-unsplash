const prisma = require('../client');

const jsonTopics = require('./data/topics.json');
const jsonTopicsCovers = require('./data/topicsCovers.json');

module.exports = async () => {
  const seededTopics = await Promise.all(
    jsonTopics.map((topic, index) => {
      const { topicUid, ...topicCover} = jsonTopicsCovers[index];
      return prisma.topic.upsert({
        create: {
          ...topic,
          cover: { create: topicCover }
        },
        update: topic,
        where: { uid: topic.uid }
      });
    })
  );
  console.log(`Seed topics x ${seededTopics.length}`);
};
