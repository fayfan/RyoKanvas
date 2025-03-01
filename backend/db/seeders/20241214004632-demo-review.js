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
          userId: 2,
          spotId: 1,
          review: `Absolutely magical! The Whispering Pines Retreat was everything we needed for a relaxing getaway. The fireplace was so cozy, and the views were breathtaking.`,
          stars: 5,
        },
        {
          userId: 3,
          spotId: 1,
          review: `Perfect for a quiet escape. The cabin was clean and well-maintained. We loved the deck and spent most of our time enjoying the scenery.`,
          stars: 4,
        },
        {
          userId: 2,
          spotId: 2,
          review: `Coral Sands Villa was a dream come true! The beachfront access and private pool were amazing. The decor was vibrant and fun.`,
          stars: 5,
        },
        {
          userId: 4,
          spotId: 2,
          review: `Great location and beautiful villa. The sunrise views were worth waking up early for. Highly recommend for a Miami vacation.`,
          stars: 4,
        },
        {
          userId: 3,
          spotId: 3,
          review: `The Cactus Bloom Hacienda was incredible! The desert garden and panoramic views were stunning. The hot tub was a nice bonus.`,
          stars: 5,
        },
        {
          userId: 1,
          spotId: 4,
          review: `Hanami House was a truly authentic Japanese experience. The garden was beautiful, and the tatami rooms were very comfortable.`,
          stars: 5,
        },
        {
          userId: 3,
          spotId: 5,
          review: `Zen Garden Retreat was exactly what we needed for a peaceful stay. The bamboo garden was serene, and the onsen was fantastic.`,
          stars: 5,
        },
        {
          userId: 2,
          spotId: 6,
          review: `The views from Fuji Panorama Lodge were absolutely breathtaking. The lodge was modern and comfortable, perfect for a nature getaway.`,
          stars: 5,
        },
        {
          userId: 4,
          spotId: 7,
          review: `Seashell Cottage was a little slice of paradise. The private beach and tropical garden were perfect. We loved relaxing in the hammock.`,
          stars: 5,
        },
        {
          userId: 2,
          spotId: 8,
          review: `Reef View Bungalow was amazing for snorkeling. The coral reef was vibrant, and the bungalow was very cozy.`,
          stars: 4,
        },
        {
          userId: 1,
          spotId: 9,
          review: `Terrace View House was a unique cultural experience. The rice terrace views were stunning, and the communal kitchen was great for meeting other travelers.`,
          stars: 4,
        },
        {
          userId: 4,
          spotId: 10,
          review: `Red Rock Vista was spectacular. The views were phenomenal, and the stargazing deck was perfect for night sky viewing.`,
          stars: 5,
        },
        {
          userId: 1,
          spotId: 11,
          review: `Sequoia Sanctuary was a truly magical retreat. The towering redwoods were awe-inspiring, and the cabin was very cozy.`,
          stars: 5,
        },
        {
          userId: 3,
          spotId: 12,
          review: `Emerald Bay Escape was the perfect luxurious getaway. The lakefront views were incredible, and the private dock was a great feature.`,
          stars: 5,
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
          [Op.in]: [1, 2, 3, 4],
        },
      },
      {}
    );
  },
};
