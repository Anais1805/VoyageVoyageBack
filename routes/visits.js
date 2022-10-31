var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;


router.get('/:lon/:lat', (req, res) => {
    const lat = req.params.lat
    const lon = req.params.lon
    fetch(
<<<<<<< HEAD
        `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${lon}&lat=${lat}&kinds=historic&cultural&rate=1&limit=5&apikey=${API_KEY}`
=======
        `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${lon}&lat=${lat}&kinds=historic&cultural&rate=1&limit=100&format=json&apikey=${API_KEY}`
>>>>>>> 56e49bb9eda37e05cf670255c0d875e912a6b6ec
        ).then(resp => resp.json())
        .then(dataa => {
        if(dataa !== null){
        res.json({result: true, visits: dataa})
    }else {
        res.json({result: false, error: 'No visits found'})
    }
        })
  });


module.exports = router;