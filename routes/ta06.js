//TA04 PLACEHOLDER
const express = require("express");
const router = express.Router();

const ta06 = require('../controllers/ta06');

router.get("/", ta06.getIndex);

router.get("/register", ta06.getRegister);
router.get("/login", ta06.getLogin);
router.post("/register", ta06.postRegister);
router.post("/login", ta06.postLogin);


module.exports = router;