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
          address: '42 Willow Creek Lane',
          city: 'Asheville',
          state: 'NC',
          country: 'United States',
          lat: 35.5951,
          lng: -82.5515,
          name: 'The Whispering Pines Retreat',
          description:
            'A secluded mountain cabin nestled among tall pines, perfect for a peaceful getaway. Features a cozy fireplace and a large deck overlooking the valley.',
          price: 250.0,
        },
        {
          ownerId: 1,
          address: '17 Ocean Breeze Drive',
          city: 'Miami',
          state: 'FL',
          country: 'United States',
          lat: 25.7616,
          lng: -80.1918,
          name: 'Coral Sands Villa',
          description:
            'A vibrant beachfront villa with direct access to the ocean. Enjoy stunning sunrise views and a private pool. Modern amenities and colorful decor.',
          price: 350.0,
        },
        {
          ownerId: 2,
          address: '9 Desert Rose Trail',
          city: 'Scottsdale',
          state: 'AZ',
          country: 'United States',
          lat: 33.4942,
          lng: -111.9261,
          name: 'Cactus Bloom Hacienda',
          description:
            'A spacious hacienda with a desert garden, offering panoramic views of the surrounding mountains. Features a large patio and a hot tub.',
          price: 300.0,
        },
        {
          ownerId: 4,
          address: '5 Cherry Blossom Lane, Sakura Town',
          city: 'Kyoto',
          state: 'Kyoto Prefecture',
          country: 'Japan',
          lat: 34.9857,
          lng: 135.759,
          name: 'Hanami House',
          description:
            'A traditional Japanese house with a serene garden, perfect for experiencing the beauty of cherry blossoms. Features tatami rooms and a tea ceremony space.',
          price: 280.0,
        },
        {
          ownerId: 4,
          address: '8 Bamboo Path, Arashiyama Village',
          city: 'Tokyo',
          state: 'Tokyo Prefecture',
          country: 'Japan',
          lat: 35.6895,
          lng: 139.6917,
          name: 'Zen Garden Retreat',
          description:
            'A minimalist retreat with a beautiful bamboo garden, designed for relaxation and meditation. Features a private onsen and a meditation room.',
          price: 320.0,
        },
        {
          ownerId: 4,
          address: '12 Mountain View Road, Fuji Heights',
          city: 'Hakone',
          state: 'Kanagawa Prefecture',
          country: 'Japan',
          lat: 35.2307,
          lng: 139.0494,
          name: 'Fuji Panorama Lodge',
          description:
            'A modern lodge with stunning views of Mount Fuji, perfect for nature lovers. Features large windows and a spacious balcony.',
          price: 380.0,
        },
        {
          ownerId: 3,
          address: '3 Coconut Grove Street, Paradise Island',
          city: 'Cebu City',
          state: 'Central Visayas',
          country: 'Philippines',
          lat: 10.3157,
          lng: 123.8854,
          name: 'Seashell Cottage',
          description:
            'A charming cottage by the sea, with a private beach and a lush tropical garden. Features a hammock and outdoor dining area.',
          price: 200.0,
        },
        {
          ownerId: 3,
          address: '7 Coral Reef Avenue, Marine Sanctuary',
          city: 'Palawan',
          state: 'Mimaropa',
          country: 'Philippines',
          lat: 9.7741,
          lng: 118.7597,
          name: 'Reef View Bungalow',
          description:
            'A cozy bungalow overlooking a vibrant coral reef, ideal for snorkeling and diving. Features a private veranda and a barbecue grill.',
          price: 220.0,
        },
        {
          ownerId: 3,
          address: '15 Rice Field Lane, Green Valley',
          city: 'Banaue',
          state: 'Cordillera Administrative Region',
          country: 'Philippines',
          lat: 16.9167,
          lng: 121.05,
          name: 'Terrace View House',
          description:
            'A rustic house with breathtaking views of the rice terraces, offering a unique cultural experience. Features traditional Filipino decor and a communal kitchen.',
          price: 180.0,
        },
        {
          ownerId: 2,
          address: '22 Canyon Rim Road',
          city: 'Sedona',
          state: 'AZ',
          country: 'United States',
          lat: 34.87,
          lng: -111.786,
          name: 'Red Rock Vista',
          description:
            "A modern home with panoramic views of Sedona's red rock formations. Features a stargazing deck and a fire pit.",
          price: 400.0,
        },
        {
          ownerId: 2,
          address: '33 Redwood Forest Trail',
          city: 'Mendocino',
          state: 'CA',
          country: 'United States',
          lat: 39.3087,
          lng: -123.8055,
          name: 'Sequoia Sanctuary',
          description:
            'A secluded cabin surrounded by towering redwood trees. Features a rustic interior and a private hiking trail.',
          price: 270.0,
        },
        {
          ownerId: 2,
          address: '44 Lakeview Drive',
          city: 'Lake Tahoe',
          state: 'NV',
          country: 'United States',
          lat: 39.0968,
          lng: -120.0324,
          name: 'Emerald Bay Escape',
          description:
            'A luxurious lakefront property with stunning views of Emerald Bay. Features a private dock, a hot tub, and a gourmet kitchen.',
          price: 450.0,
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
        ownerId: {
          [Op.in]: [1, 2, 3, 4],
        },
      },
      {}
    );
  },
};
