var express = require('express');
var router = express.Router();
require('../models/connection');
const Booking = require('../models/bookings')



//route POST : Mes réservations
router.post('/', (req, res) => {
 
  Booking.findOne({date: req.body.date}).then(data => {
    if(data === null){
      const newBooking = new Booking({
       token: req.body.token,
        date: req.body.date,
        destination: req.body.destination,
        morningVisit: req.body.morningVisit,
        lunchRestaurant: req.body.lunchRestaurant,
        afternoonVisit: req.body.afternoonVisit,
        dinerRestaurant: req.body.dinerRestaurant
      })
      newBooking.save().then(data =>{
        res.json({result: true, date: data.date})
      })
    } else {
      res.json({result: false, error: 'Journey already registered'})
    }
  })
})

//Route GET : récupérer les journées d'un utilisateur

router.get('/:token', (req, res) => {
    Booking.find()
      .populate('token')
      .then(data => {    
            res.json({ result: true, Journeys: data});      
        })
             
  });

  
module.exports = router