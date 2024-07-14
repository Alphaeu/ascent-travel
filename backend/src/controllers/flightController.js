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
