/* eslint-disable camelcase */
// const pool = require('../index.js');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'sdc_user',
  database: 'sdc',
  password: 'peanutbutt3r',
  port: 5432,
});

const getMortgages = (mortgage_id, cb) => {
  pool
    .query(`SELECT * from mortgages where mortgage_id=${mortgage_id}`, (err, { rows }) => {
      if (err) {
        cb(err);
      } else {
        cb(err, rows);
      }
    });
};

const getMortgagesListing = (listing_id, cb) => {
  pool.query(`SELECT * from mortgages where listing_id=${listing_id}`, (err, { rows }) => {
    if (err) {
      cb(err);
    } else {
      cb(err, rows);
    }
  });
};

const postMortgages = ({
  users_id, listing_id, mortgage_name, terms, fees, rate, apr,
}, cb) => {
  const values = [users_id, listing_id, mortgage_name, terms, fees, rate, apr];
  pool
    .query('INSERT INTO mortgages (users_id, listing_id, mortgage_name, terms, fees, rate, apr)VALUES($1, $2, $3, $4, $5, $6, $7)', values, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(err, results);
      }
    });
};

const updateMortgages = ({
  users_id, listing_id, mortgage_name, terms, fees, rate, apr,
}, mortgage_id, cb) => {
  const values = [mortgage_id, users_id, listing_id, mortgage_name, terms, fees, rate, apr];
  pool
    .query('UPDATE mortgages SET users_id=$2, listing_id=$3, mortgage_name=$4, terms=$5, fees=$6, rate=$7, apr=$8 WHERE mortgage_id=$1', values, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(err, results);
      }
    });
};

const deleteMortgages = (mortgage_id, cb) => {
  const values = [mortgage_id];
  pool
    .query('DELETE FROM mortgages WHERE mortgage_id=$1', values, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(err, results);
      }
    });
};

module.exports = {
  getMortgages,
  getMortgagesListing,
  postMortgages,
  updateMortgages,
  deleteMortgages,
};
