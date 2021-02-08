const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;
// const homes = require('./routes/homes');
// const mortgage = require('./routes/mortgage');

// db
const pool = new Pool({
  user: 'sdc_user',
  database:'sdc',
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

// Routes
app.get('/api/listings/:id/mortgages/', (req, res) => {
  console.log(req.params);
  const query = 'SELECT * from mortgages WHERE listing_id=$1'
  const values = [req.params.id];
  console.log(values);
  pool
    .query(query, values)
    .then(({rows}) => {
      res.status(200).send(rows);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
})

app.get('/api/mortgages/:id', (req, res) => {
  console.log(req.params);
  const query = 'SELECT * from mortgages WHERE mortgage_id=$1'
  const values = [req.params.id];
  console.log(values);
  pool
    .query(query, values)
    .then(({rows}) => {
      res.status(200).send(rows);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
})

app.get('/api/users/:id/mortgages/', (req, res) => {
  console.log(req.params);
  const query = 'SELECT * from mortgages WHERE users_id=$1'
  const values = [req.params.id];
  console.log(values);
  pool
    .query(query, values)
    .then(({rows}) => {
      res.status(200).send(rows);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
})

app.post('/api/mortgages/:id', (req, res) => {
  const { users_id, listing_id, mortgage_name, terms, fees, rate, apr } = req.body;
  console.log(req.body);
  const query = 'INSERT INTO mortgages (mortgage_id, users_id, listing_id, mortgage_name, terms, fees, rate, apr)VALUES($1, $2, $3, $4, $5, $6, $7, $8)';
  const values = [req.params.id, users_id, listing_id, mortgage_name, terms, fees, rate, apr];
  pool
    .query(query, values)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.patch('/api/mortgages/:id', (req, res) => {
  const { users_id, listing_id, mortgage_name, terms, fees, rate, apr } = req.body;
  console.log(req.body);
  const query = 'UPDATE mortgages SET users_id=$2, listing_id=$3, mortgage_name=$4, terms=$5, fees=$6, rate=$7, apr=$8 WHERE mortgage_id=$1';
  const values = [req.params.id, users_id, listing_id, mortgage_name, terms, fees, rate, apr];
  pool
    .query(query, values)
    .then((data) => {
      res.status(204).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.delete('/api/mortgages/:id', (req, res) => {
  const query = 'DELETE FROM mortgages WHERE mortgage_id=$1'
  const values = [req.params.id];
  pool
    .query(query, values)
    .then((data) => {
      res.status(204).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
})

app.listen(port, () => console.log(`connected on ${port}`));

