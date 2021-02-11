const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
require('newrelic');

const app = express();
const port = 3003;
const listingRouter = require('./controllers/listings.js');
const mortgageRouter = require('./controllers/mortgages.js');
const userRouter = require('./controllers/users.js');
// const homes = require('./routes/homes');
// const mortgage = require('./routes/mortgage');

// db
const pool = new Pool({
  user: 'sdc_user',
  database: 'sdc',
  password: 'peanutbutt3r',
  port: 5432,
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL!'));

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/loaderio-91b74eeb3a3e11600bc41da6c7772260.txt', express.static(path.join(__dirname, '../loaderio-91b74eeb3a3e11600bc41da6c7772260.txt')));
// Routes
app.use('/api/:listing_id/listings', (req, res, next) => {
  req.listing_id = req.params.listing_id;
  next();
}, listingRouter);

app.use('/api/:listing_id/mortgages', (req, res, next) => {
  req.listing_id = req.params.listing_id;
  next();
}, mortgageRouter);

app.use('/api/users', userRouter);

app.listen(port, () => console.log(`connected on ${port}`));

module.exports = pool;
