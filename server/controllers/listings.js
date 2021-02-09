/* eslint-disable camelcase */
const express = require('express');
const {
  getListings, postListings, updateListings, deleteListings,
} = require('../models/listings.js');

const router = express.Router();

router.get('/', (req, res) => {
  const { listing_id } = req;
  getListings(listing_id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

router.post('/', (req, res) => {
  postListings(req.body, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(results);
    }
  });
});

router.patch('/', (req, res) => {
  const { listing_id } = req;
  updateListings(listing_id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(results);
    }
  });
});

router.delete('/', (req, res) => {
  const { listing_id } = req;
  deleteListings(listing_id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(204).send(results);
    }
  });
});

module.exports = router;
