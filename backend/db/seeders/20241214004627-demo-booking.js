'use strict';
/** @type {import('sequelize-cli').Migration} */

const { Booking } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Booking.bulkCreate(
      [
        {
          spotId: 3,
          userId: 1,
          startDate: '2025-01-01',
          endDate: '2025-01-02',
        },
        {
          spotId: 2,
          userId: 2,
          startDate: '2026-02-15',
          endDate: '2026-03-01',
        },
        {
          spotId: 6,
          userId: 3,
          startDate: '2025-08-17',
          endDate: '2025-08-24',
        },
        {
          spotId: 8,
          userId: 4,
          startDate: '2025-06-04',
          endDate: '2025-06-08',
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        spotId: {
          [Op.in]: [3, 2, 6, 8],
        },
      },
      {}
    );
  },
};
