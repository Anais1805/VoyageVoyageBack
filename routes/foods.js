var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const API_KEY = process.env.API_KEY;

// Route pour aller chercher tous les restaurants
router.get("/:lon/:lat", (req, res) => {
  const lat = req.params.lat;
  const lon = req.params.lon;
  fetch(
    `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${lon}&lat=${lat}&kinds=foods&rate=1&limit=5&format=json&apikey=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data !== null) {
        res.json({ result: true, foods: data });
      } else {
        res.json({ result: false, error: "No restaurants found" });
      }
    });
});

module.exports = router;
