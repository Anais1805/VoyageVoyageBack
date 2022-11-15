var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const API_KEY = process.env.API_KEY;

router.get("/:lon/:lat", (req, res) => {
  const lat = req.params.lat;
  const lon = req.params.lon;
  fetch(
    `https://api.opentripmap.com/0.1/en/places/radius?radius=20000&lon=${lon}&lat=${lat}&kinds=natural&rate=1&limit=5&format=json&apikey=${API_KEY}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      if (data !== null) {
        res.json({ result: true, naturals: data });
      } else {
        res.json({ result: false, error: "No hikes found" });
      }
    });
});

// router.get('/:xid', (req, res) => {
//     const id = req.params.id;
//     fetch(
//       `https://api.opentripmap.com/0.1/en/places/xid/${id}&apikey=${API_KEY}`
//       ).then(resp => resp.json())
//       .then(dataa => {
//       if(dataa !== null){
//       res.json({result: true, naturalsinfos: dataa})
//   }else {
//       res.json({result: false, error: 'No xid found'})
//   }
//       })
// })
module.exports = router;
