// backend/routes/api/reviews.js
const express = require('express');
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js');

const router = express.Router();

// Code endpoints here

module.exports = router;
