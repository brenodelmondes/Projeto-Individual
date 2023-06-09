var express = require("express");
var router = express.Router();

var hitsController = require("../controllers/hitsController");

router.get("/ouvir/:nomeMusica", function (req, res) {
    hitsController.ouvir(req, res);
});

router.get("/listar", function (req, res) {
    hitsController.listar(req, res);
});



module.exports = router;