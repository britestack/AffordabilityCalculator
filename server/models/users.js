/* eslint-disable camelcase */
// const pool = require('../index.js');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'sdc_user',
  database: 'sdc',
  password: 'peanutbutt3r',
  port: 5432,
});

const getUsers = (users_id, cb) => {
  pool
    .query(`SELECT * FROM users WHERE users_id=${users_id}`, (err, { rows }) => {
      if (err) {
        cb(err);
      } else {
        cb(err, rows);
      }
    });
};

const getUsersFavorite = (users_id, cb) => {
  pool
    .query(`SELECT * from mortgages WHERE users_id=${users_id}`, (err, { rows }) => {
      if (err) {
        cb(err);
      } else {
        cb(err, rows);
      }
    });
};

const postUsers = ({
  username, email, user_password, user_ip,
}, cb) => {
  const values = [username, email, user_password, user_ip];
  pool
    .query('INSERT INTO users (username, email, user_password, user_ip', values, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(err, results);
      }
    });
};

const updateUsers = ({ username, email, user_password }, users_id, cb) => {
  const values = [users_id, username, email, user_password];
  pool
    .query('UPDATE users SET username=$2, email=$3, user_password=$4 WHERE users_id=$1', values, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(err, results);
      }
    });
};

const deleteUsers = (users_id, cb) => {
  pool
    .query(`DELETE FROM users WHERE users_id=${users_id}`, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(err, results);
      }
    });
};

module.exports = {
  getUsers,
  getUsersFavorite,
  postUsers,
  updateUsers,
  deleteUsers,
};
