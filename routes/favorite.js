var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


const API_KEY = process.env.API_KEY;

router.get('/iledefrance', (req, res) => {
    fetch(`https://diffuseur.datatourisme.fr/webservice/477fb0ac65e697ac743023e5bb37cc9a/a38631a4-c865-4346-bc1c-d3bfb879e85d`)
    .then(response => response.json)
    .then(data => { 
       console.log(data)
       res.json({ data: index })
    })

    res.json({})
})
  
module.exports = router;
