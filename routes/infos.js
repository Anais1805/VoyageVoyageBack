var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;


router.get('/:xid', (req, res) => {
    const id = req.params.id
  fetch(`https://api.opentripmap.com/0.1/en/places/xid/${id}&apikey=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    if(data !== null){
        res.json({result: true, infos: data})
    }else {
        res.json({result: false, error: 'No city found'})
    }
   
  });
})

module.exports = router;