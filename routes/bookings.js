var express = require('express');
var router = express.Router();
require('../models/connection');
const Booking = require('../models/bookings')



//route POST : Mes réservations
router.post('/', (req, res) => {
 
  Booking.findOne({date: req.body.date}).then(data => {
    if(data === null){
      const newBooking = new Booking({
        userId: req.body.userId,
        date: req.body.date,
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

router.get('/', (req, res) => {
    Booking.find()
      .populate('userId', 'username')
      .then(data => {    
            res.json({ result: true, Journeys: data});      
        });        
  });

module.exports = router