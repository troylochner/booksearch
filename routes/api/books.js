const router = require("express").Router();
const booksController = require("../../controllers/bookcontroller");

// Matches with "/api/books"
router.route("/").get(booksController.findAll)

module.exports = router;
