const { coll } = require("./config");
const express = require("express");
const router = express.Router();
const dbRtns = require("./dbroutines");
const setalert = require("./setup");

router.get("/", async (req, res) => {
    
    try {
     let jsonData = await setalert.processDb();
      res.status(200).send(jsonData);
  
    } catch (err) {
      console.log(err.stack);
      res.status(500).send("get all json failed - internal server error");
    }
  });

  module.exports = router;