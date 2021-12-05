const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'sextina_aquafina',
    email: 'h20blowhole@cbc.ca',
    password: 'password123'
  },
  {
    username: 'hollyhock8dads',
    email: 'toomanylastnames@sogou.com',
    password: 'password123'
  },
  {
    username: 'sarah_lynn',
    email: 'laurencefishburn@last.fm',
    password: 'password123'
  },
  {
    username: 'beatrice_sugarman',
    email: 'itsnoisben@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'stilton_cheese_heiress',
    email: 'cheesequeen@nasa.com',
    password: 'password123'
  },
  {
    username: 'pinkypenguin',
    email: 'publishhouse@imdb.com',
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
    username: 'diane_nguyen',
    email: 'impublished@google.ru',
    password: 'password123'
  },
  {
    username: 'princess_carolyn',
    email: 'untitledpcproject@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
