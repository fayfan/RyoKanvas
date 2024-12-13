'use strict';
/** @type {import('sequelize-cli').Migration} */

const { Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Spot.bulkCreate(
      [
        {
          ownerId: 1,
          address: '123 Rainbow Rd.',
          city: 'Dallas',
          state: 'TX',
          country: 'United States',
          lat: 32.7767,
          lng: 96.797,
          name: 'Rainbow Roadside Lodge',
          description:
            'Rainbow Roadside Lodge is a cozy bungalow located on 7 acres of private property near downtown Dallas.',
          price: 123.0,
        },
        {
          ownerId: 2,
          address: 'Test Address 1',
          city: 'Test City 1',
          state: 'CA',
          country: 'United States',
          lat: 77.777,
          lng: 99.999,
          name: 'Test Spot 1',
          description: 'Test Spot 1 description',
          price: 0.01,
        },
        {
          ownerId: 3,
          address: 'Test Address 2',
          city: 'Test City 2',
          state: 'CA',
          country: 'United States',
          lat: -77.777,
          lng: -99.999,
          name: 'Test Spot 2',
          description: 'Test Spot 2 description',
          price: 10000.0,
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        name: {
          [Op.in]: ['Rainbow Roadside Lodge', 'Test Spot 1', 'Test Spot 2'],
        },
      },
      {}
    );
  },
};
