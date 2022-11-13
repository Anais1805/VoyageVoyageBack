const mongoose = require('mongoose');

const destinationSchema = mongoose.Schema({
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    token: String,
    city: String, 
    lat: String,
    lon: String,
    date: String,
    
});

const Destination = mongoose.model('destinations', destinationSchema);

module.exports = Destination;
