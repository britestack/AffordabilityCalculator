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
  host: 'localhost',
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL!'));

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static
app.use('/loaderio-901edfdebddd2bad0a0b4fdb38cc1646.txt', express.static(path.join(__dirname, '../loaderio-901edfdebddd2bad0a0b4fdb38cc1646.txt')));
app.use(express.static(path.join(__dirname, '../client/dist')));

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
