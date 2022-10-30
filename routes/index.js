var express = require('express');
var router = express.Router();

router.get('/:lonmin/:latmin', (req, res) => {
    const latmin = req.params.latmin;
    const lonmin = req.params.lonmin;
    
   
  fetch(`https://api.opentripmap.com/0.1/en/places/bbox?radius=1000&lon=${lonmin}&latmin=${latmin}&kinds=foods&rate=1&format=json&apikey=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    if(data !== null){
      res.json({result: true, foods: data})
  }else {
      res.json({result: false, error: 'No restaurants found'})
  }
   
  });
  })
  

module.exports = router;
