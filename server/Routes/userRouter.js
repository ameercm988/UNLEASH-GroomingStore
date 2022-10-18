const { signup } = require("../Controller/userController");

const router = require("express").Router();

router.post("/signup", signup);

router.post('/login',)

module.exports = router;
