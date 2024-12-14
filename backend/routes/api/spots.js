// backend/routes/api/spots.js
const express = require('express');
// const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth.js');
const { Spot } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js');

const router = express.Router();

// Check & validate user keys at Spot creation
const validateSpotCreation = [
  check('address')
    .exists({ checkFalsy: true })
    .withMessage('Street address is required.'),
  check('city').exists({ checkFalsy: true }).withMessage('City is required'),
  check('state').exists({ checkFalsy: true }).withMessage('State is required'),
  check('country')
    .exists({ checkFalsy: true })
    .withMessage('Country is required'),
  check('lat')
    .exists({ checkFalsy: true })
    .isInt({
      min: -90,
      max: 90,
    })
    .withMessage('Latitude must be within -90 & 90'),
  check('lng')
    .exists({ checkFalsy: true })
    .isInt({
      min: -180,
      max: 180,
    })
    .withMessage('Longitude must be within -180 & 180'),
  check('name')
    .exists({ checkFalsy: true })
    .isLength({ max: 49 })
    .withMessage('Name must be less than 50 characters'),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Description is required'),
  check('price')
    .exists({ checkFalsy: true })
    .isInt({ min: 0.01 })
    .withMessage('Price per day must be a positive number'),
  handleValidationErrors,
];

// Get all Spots
router.get('/', async (req, res) => {
  const allSpots = await Spot.findAll();
  return res.json({ Spots: allSpots });
});

module.exports = router;
