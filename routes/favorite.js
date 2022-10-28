var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');



const API_KEY = process.env.API_KEY;

// Route lieu afin d'avoir les coordonnées d'une ville 
router.get('/city', (req, res) => {
    fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=Lille&country=fr&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });
})

// Route Food 
router.get('/foods', (req, res) => {
    fetch(`https://api.opentripmap.com/0.1/en/places/bbox?lon_min=1.3488&lon_max=2.5&lat_min=47.85341&lat_max=50&kinds=foods&rate=1&format=json&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });
})


module.exports = router;
