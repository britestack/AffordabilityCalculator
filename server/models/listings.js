/* eslint-disable camelcase */
// const pool = require('../index.js');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'sdc_user',
  database: 'sdc',
  password: 'peanutbutt3r',
  port: 5432,
});

const getListings = (listing_id, cb) => {
  pool
    .query(`SELECT * from listings where listing_id=${listing_id}`, (err, { rows }) => {
      if (err) {
        cb(err);
      } else {
        cb(err, rows);
      }
    });
};

const postListings = ({ price, rating }, cb) => {
  const values = [price, rating];
  pool
    .query('INSERT INTO listings (price, rating) VALUES ($1, $2)', values, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(err, results);
      }
    });
};

const updateListings = ({ price }, listing_id, cb) => {
  const values = [price, listing_id];
  pool
    .query('UPDATE listings SET price=$1 WHERE listing_id=$2', values, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(err, results);
      }
    });
};

const deleteListings = (listing_id, cb) => {
  const values = [listing_id];
  pool
    .query('DELETE FROM listings WHERE listing_id=$1', values, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(err, results);
      }
    });
};

module.exports = {
  getListings,
  postListings,
  updateListings,
  deleteListings,
};
