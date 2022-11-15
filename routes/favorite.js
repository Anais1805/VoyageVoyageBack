var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const API_KEY = process.env.API_KEY;

// Route lieu afin d'avoir les coordonnées d'une ville
router.get("/:city/:country", (req, res) => {
  const city = req.params.city;
  const country = req.params.country;
  fetch(
    `https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&country=${country}&apikey=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.json({ result: true, city: data });
    });
});

module.exports = router;
