const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');
const { getFlights, createFlight } = require('../controllers/flightController');

router.get('/', getFlights, flightController.getAllFlights);
router.post('/create', ceateFlight, flightController.createFlight);
router.delete('/:id', flightController.deleteFlight);

module.exports = router;
