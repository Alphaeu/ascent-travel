const Booking = require('../models/Booking');

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('flightId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBooking = async (req, res) => {
  const { flightId, name, email, phone, passengers } = req.body;

  const booking = new Booking({ flightId, name, email, phone, passengers });

  try {
    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getBookings,
  createBooking,
};

