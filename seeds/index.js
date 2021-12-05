const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedVotes = require('./vote-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  try {
    await seedUsers();
  } catch (err) {
    console.log('--------------');
    console.log(err);
  }
  try {
    await seedPosts();
  } catch (err) {
    console.log('--------------');
    console.log(err);
  }
  try {
    await seedComments();
  } catch (err) {
    console.log('--------------');
    console.log(err);
  }
  try {
    await seedVotes();
  } catch (err) {
    console.log('--------------');
    console.log(err);
  }

  process.exit(0);
};

seedAll();
