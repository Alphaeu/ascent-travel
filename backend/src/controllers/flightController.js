 const Flight = require('../models/Flight');

// Get all flights
exports.getAllFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    next(err);
  }
};

const Flight = require('../models/Flight');

const getFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFlight = async (req, res) => {
  const { airline, from, to, departureTime, arrivalTime, price } = req.body;

  const flight = new Flight({ airline, from, to, departureTime, arrivalTime, price });

  try {
    const savedFlight = await flight.save();
    res.status(201).json(savedFlight);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getFlights,
  createFlight,
};

