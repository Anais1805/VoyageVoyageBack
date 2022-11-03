const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    token: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    destination: {type: mongoose.Schema.Types.ObjectId, ref: 'destination '},
    date: String,
    morningVisit: String,
    lunchRestaurant: String,
    afternoonVisit: String,
    dinerRestaurant: String
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;
