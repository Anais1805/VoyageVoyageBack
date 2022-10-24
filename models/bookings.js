const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    date: String,
    morningVisit: String,
    lunchRestaurant: String,
    afternoonVisit: String,
    dinerRestaurant: String
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;
