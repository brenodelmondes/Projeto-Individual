var express = require("express");
var router = express.Router();

var hitsController = require("../controllers/hitsController");

router.get("/ouvir/:ipt_nomeMusica", function (req, res) {
    

    hitsController.ouvir(req, res);
});

module.exports = router;