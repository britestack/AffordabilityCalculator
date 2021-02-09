/* eslint-disable camelcase */
const express = require('express');
const {
  getUsers, getUsersFavorite, postUsers, updateUsers, deleteUsers,
} = require('../models/users.js');

const router = express.Router();

router.get('/:users_id', (req, res) => {
  const { users_id } = req.params;
  getUsers(users_id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

router.get('/:users_id/mortgages', (req, res) => {
  const { users_id } = req.params;
  getUsersFavorite(users_id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

router.post('/', (req, res) => {
  postUsers(req.body, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(results);
    }
  });
});

router.patch('/:users_id', (req, res) => {
  const { users_id } = req.params;
  updateUsers(req.body, users_id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(204).send(results);
    }
  });
});

router.delete('/:users_id', (req, res) => {
  const { users_id } = req.params;
  deleteUsers(users_id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(204).send(results);
    }
  });
});

module.exports = router;
