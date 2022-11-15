const mongoose = require('mongoose');

const destinationSchema = mongoose.Schema({
    token: String,
    city: String, 
    lat: String,
    lon: String,
    date: String,
    
});

const Destination = mongoose.model('destinations', destinationSchema);

module.exports = Destination;
