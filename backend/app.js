// backend/app.js
// Import packages
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

// Create a variable called `isProduction` that will be `true` if the environment is in production by checking the `environment` key in `backend/config/index.js`
const { environment } = require('./config');
const isProduction = environment === 'production';

// Initialize Express
const app = express();

// morgan logs information about requests & responses
app.use(morgan('dev'));

app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
  helmet.crossOriginResourcePolicy({
    policy: 'cross-origin',
  })
);

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && 'Lax',
      httpOnly: true,
    },
  })
);

// Connect all the routes
app.use(routes);

module.exports = app;
