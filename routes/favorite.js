var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');



const API_KEY = process.env.API_KEY;

// Route lieu afin d'avoir les coordonnées d'une ville 
router.post('/city', (req, res) => {
      const city = req.body.city;
      const country = req.body.country;
    fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&country=${country}&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
       res.json({result: true, city: data});
    });
})

// Route Food 
router.get('/foods', (req, res) => {
      const lat_min = req.body.latitude;
      const lat_max = lat_min + 1;
      const lon_min = req.body.longitude;
      const lon_max = lon_min + 1;
    fetch(`https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${lon_min}&lon_max=${lon_max}&lat_min=${lat_min}&lat_max=${lat_max}&kinds=foods&rate=1&format=json&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log({result: true, foods: data});
      return data;
    });
})

// Route Visit
router.get("/visits", (req, res) => {
  
  fetch(
    "https://api.opentripmap.com/0.1/en/places/bbox?lon_min=3.05858&lon_max=4&lat_min=50.63297&lat_max=51&src_geom=wikidata&src_attr=wikidata&format=json&apikey=5ae2e3f221c38a28845f05b6998fe19bd4efc90feefb6f24d37a5b15"
  ).then(resp => resp.json())
  .then(data => 
    res.json({result: true, visits: data}))
});


module.exports = router;
