'use strict';
/** @type {import('sequelize-cli').Migration} */

const { Review } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Review.bulkCreate(
      [
        {
          userId: 1,
          spotId: 1,
          review: 'Test review 1',
          stars: '5',
        },
        {
          userId: 2,
          spotId: 2,
          review: 'Test review 2',
          stars: '3',
        },
        {
          userId: 3,
          spotId: 3,
          review: 'Test review 3',
          stars: '1',
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        userId: {
          [Op.in]: [1, 2, 3],
        },
      },
      {}
    );
  },
};
