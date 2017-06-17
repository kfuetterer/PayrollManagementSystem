var express = require("express");

var quotesController = require("../controllers/quotesController");

var router = new express.Router();

router.get("/quotes/:id?", quotesController.index);
router.post("/quotes", quotesController.create);
router.patch("/quotes/:id", quotesController.update);
router.delete("/quotes/:id", quotesController.destroy);

module.exports = router;