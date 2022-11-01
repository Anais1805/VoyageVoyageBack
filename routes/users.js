var express = require('express');
var router = express.Router();
require('../models/connection');
const User = require('../models/users')

//génération du token
const uid2=require('uid2')
const token= uid2(32)
//chiffrage du mdp
const bcrypt = require('bcrypt')

//route POST : Sign Up
router.post('/signup', (req, res) => {
  if(!req.body.username  || !req.body.password || !req.body.email){
    res.json({result: false, error: 'Missing or empty fields'})
    return
  }
  const hash = bcrypt.hashSync(req.body.password, 10)
  User.findOne({username: req.body.username}).then(data => {
    if(data === null){
      const newUser = new User ({
        username: req.body.username,
        password: hash,
        email: req.body.email,
        family: req.body.family,
        budget: req.body.budget,
        diet: req.body.diet,
        displacement: req.body.displacement,
        token: token,
        isConnected: req.body.isConnected,
      })
      newUser.save().then(data =>{
        res.json({result: true, token: data.token})
      })
    } else {
      res.json({result: false, error: 'User already exists'})
    }
  })
})

//route POST : Sign In
router.post('/signin', (req, res) => {
  if(!req.body.password || !req.body.email){
    res.json({result: false, error: 'Missing or empty fields'})
    return
  }
  User.findOne({email: req.body.email}).then(data =>{
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      res.json({ result: true, token: data.token });
    } else {
      res.json({ result: false, error: 'User not found or wrong password' });
    }
  })
})
module.exports = router;
