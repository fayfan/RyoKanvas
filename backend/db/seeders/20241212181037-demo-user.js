'use strict';
/** @type {import('sequelize-cli').Migration} */

const { User } = require('../models');
const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate(
      [
        {
          email: 'purrfect@user.io',
          username: 'purrfectGuest',
          hashedPassword: bcrypt.hashSync('password0'),
          firstName: 'Erin',
          lastName: 'Hunter',
        },
        {
          email: 'chosen1@user.io',
          username: 'chosen1',
          hashedPassword: bcrypt.hashSync('password1'),
          firstName: 'Harry',
          lastName: 'Potter',
        },
        {
          email: 'radiantKnight@user.io',
          username: 'radiantKnight',
          hashedPassword: bcrypt.hashSync('password2'),
          firstName: 'Margaret',
          lastName: 'Nearl',
        },
        {
          email: 'demo@demo.io',
          username: 'DemoUser',
          hashedPassword: bcrypt.hashSync('password'),
          firstName: 'Demo',
          lastName: 'User',
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] },
      },
      {}
    );
  },
};
