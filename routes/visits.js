var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;


router.get('/:lonmin/:longitudemax/:latmin/:latitudemax', (req, res) => {
    const latmin = req.params.latmin;
    const latitudemax = req.params.latitudemax
    const lonmin = req.params.lonmin;
    const longitudemax = req.params.longitudemax
    console.log('lonmax', longitudemax)
    console.log('lonmin', lonmin)
    console.log('latmax', latitudemax)
    console.log( 'latmin',latmin)
    fetch(
        `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${lonmin}&lon_max=${longitudemax}&lat_min=${latmin}&lat_max=${latitudemax}&kinds=historic&cultural&rate=1&format=json&apikey=${API_KEY}`
        ).then(resp => resp.json())
        .then(data => {
        if(data !== null){
        res.json({result: true, visits: data})
    }else {
        res.json({result: false, error: 'No visits found'})
    }
        })
  });


module.exports = router;