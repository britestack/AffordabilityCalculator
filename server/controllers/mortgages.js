/* eslint-disable camelcase */
const express = require('express');
const {
  getMortgages, getMortgagesListing, postMortgages, updateMortgages, deleteMortgages,
} = require('../models/mortgages.js');

const router = express.Router();

router.get('/:mortgage_id', (req, res) => {
  const { mortgage_id } = req.params;
  getMortgages(mortgage_id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

router.get('/', (req, res) => {
  const { listing_id } = req;
  getMortgagesListing(listing_id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

router.post('/', (req, res) => {
  postMortgages(req.body, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(results);
    }
  });
});

router.patch('/:mortgage_id', (req, res) => {
  const { mortgage_id } = req.params;
  updateMortgages(req.body, mortgage_id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(results);
    }
  });
});

router.delete('/:mortgage_id', (req, res) => {
  const { mortgage_id } = req.params;
  deleteMortgages(mortgage_id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(204).send(results);
    }
  });
});

module.exports = router;
