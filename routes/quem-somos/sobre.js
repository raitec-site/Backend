const express = require("express");
const router = express.Router();


router.get("/sobre", (req, res) => {
  res.render("quem-somos/sobre");
});

module.exports = router;