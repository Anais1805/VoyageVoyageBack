var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;


router.get('/:longitude/:latitude', (req, res) => {
    const lat_min = req.params.latitude;
    const latitudemax = req.params.latitude + 1;
    const lon_min = req.params.longitude;
    const longitudemax = req.params.longitude + 1;
  fetch(`https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${req.params.longitude}&lon_max=${longitudemax}&lat_min=${req.params.latitude}&lat_max=${latitudemax}&kinds=foods&rate=1&format=json&apikey=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    console.log({result: true, foods: data});
    return data;
  });
})

module.exports = router;