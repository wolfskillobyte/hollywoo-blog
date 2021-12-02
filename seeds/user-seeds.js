const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'rumham1',
    email: 'rumham1@cbc.ca',
    password: 'password123'
  },
  {
    username: 'jasonbateman',
    email: 'jasonbateman56@sogou.com',
    password: 'password123'
  },
  {
    username: 'laurencefishburn',
    email: 'laurencefishburn@last.fm',
    password: 'password123'
  },
  {
    username: 'alefmoffat32',
    email: 'alefmoffat32@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'wolfgarrrb',
    email: 'wolfskill@nasa.com',
    password: 'password123'
  },
  {
    username: 'mrasparagus',
    email: 'smellypee@imdb.com',
    password: 'password123'
  },
  {
    username: 'misterpeanutbutter',
    email: 'doggiedoggiewhatnow@feedburner.com',
    password: 'password123'
  },
  {
    username: 'blowjohorseman',
    email: 'boozecruise@china.com.cn',
    password: 'password123'
  },
  {
    username: 'dianenguyen',
    email: 'impublished@google.ru',
    password: 'password123'
  },
  {
    username: 'princesscarolyn',
    email: 'untitledprincesscarolynproject@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
