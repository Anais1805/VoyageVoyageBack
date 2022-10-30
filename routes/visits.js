var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;


router.get('/:lon/:lat', (req, res) => {
    const lat = req.params.lat
    const lon = req.params.lon
    fetch(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${lon}&lat=${lat}&kinds=historic&cultural&rate=1&limit=100&apikey=${API_KEY}`
        ).then(resp => resp.json())
        .then(dataa => {
        if(dataa !== null){
        res.json({result: true, visits: dataa.properties})
    }else {
        res.json({result: false, error: 'No visits found'})
    }
        })
  });


module.exports = router;