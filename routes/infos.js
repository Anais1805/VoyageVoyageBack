var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;


router.get('/:xid', (req, res) => {


    const xid = req.params.xid
    http://localhost:4000/infos/N191031796
    https://api.opentripmap.com/0.1/en/places/xid/N191031796?apikey=5ae2e3f221c38a28845f05b6998fe19bd4efc90feefb6f24d37a5b15
  fetch(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${API_KEY}`)

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