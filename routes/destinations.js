var express = require('express');
var router = express.Router();
require('../models/connection');
const Destination = require('../models/destinations')



//route POST : Mes destinations
router.post('/', (req, res) => {
 
  Destination.findOne({city: req.body.city}).then(data => {
    if(data === null){
      const newDestination = new Destination({
        // userId: req.body.userId,
        token: req.body.token,
        city: req.body.city,
        lat: req.body.lat,
        lon: req.body.lon,
        date: req.body.date
      })
      newDestination.save().then(data =>{
        res.json({result: true, destination: data})
      })
    } 
  })
})

router.get('/:token', (req, res) => {
  Destination.find({token: req.params.token})
    .populate('token', 'lat lon')
    .then(data => {    
          res.json({ result: true, destination: data});      
      })
           
});

module.exports = router