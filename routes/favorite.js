var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');



const API_KEY = process.env.API_KEY;

// Route lieu afin d'avoir les coordonnées d'une ville 
router.get('/:city/:country', (req, res) => {
      const city = req.params.city;
      const country = req.params.country;
    fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&country=${country}&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
       res.json({result: true, city: data});
    });
})

// Route Food 

router.get('/foods/:longitude/:latitude', (req, res) => {
      const lat_min = req.params.latitude;
      const latitudemax = req.params.latitude + 0.000001;
      const lon_min = req.params.longitude;
      const longitudemax = req.params.longitude + 0.000001;
    fetch(`https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${req.params.longitude}&lon_max=${longitudemax}&lat_min=${req.params.latitude}&lat_max=${latitudemax}&kinds=foods&rate=1&format=json&apikey=${API_KEY}`)

    .then(response => response.json())
    .then(data => {
      console.log({result: true, foods: data});
      return data;
    });
})

router.get('/:longitude/:latitude', (req, res) => {
  const lat_min = req.params.latitude;
  const latitudemax = (req.params.latitude) + 1
  const lon_min = req.params.longitude;
  const longitudemax = (req.params.longitude) + 1
fetch(`https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${req.params.longitude}&lon_max=${longitudemax}&lat_min=${req.params.latitude}&lat_max=${latitudemax}&kinds=foods&rate=1&format=json&apikey=${API_KEY}`)
.then(response => response.json())
.then(data => {
res.json({result: true, foods:data})
 
});
})

// Route Visit

router.get("/visits", (req, res) => {

  


      const lat_min = req.body.latitude;
      const lat_max = lat_min + 0.000001;
      const lon_min = req.body.longitude;
      const lon_max = lon_min + 0.000001;

  fetch(
    `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${lon_min}&lon_max=${lon_max}&lat_min=${lat_min}&lat_max=${lat_max}&kinds=historic&cultural&rate=1&format=json&apikey=${API_KEY}`
  ).then(resp => resp.json())
  .then(data => 
    res.json({result: true, visits: data}))

});

// Route Randonnée
router.get("/natural", (req, res) => {

  const lat_min = req.body.latitude;
  const lat_max = lat_min + 0.000001;
  const lon_min = req.body.longitude;
  const lon_max = lon_min + 0.000001;

fetch(
`https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${lon_min}&lon_max=${lon_max}&lat_min=${lat_min}&lat_max=${lat_max}&kinds=natural&rate=1&format=json&apikey=${API_KEY}`
).then(resp => resp.json())
.then(data => 
res.json({visits: data}))
});



router.get("/infos", (req, res) => {fetch(
`https://api.opentripmap.com/0.1/en/places/xid/Q3552599?apikey=${API_KEY}`
).then(resp => resp.json())
.then(data => 
res.json({infos: data}))
});
 
module.exports = router;

