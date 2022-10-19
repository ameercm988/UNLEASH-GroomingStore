const { signup, verify, reverify, login, googleVerify } = require("../Controller/userController");

const router = require("express").Router();

router.post('/google-verify', googleVerify)

router.post("/signup", signup);

router.get('/verify/:token', verify)

router.patch('/reverify', reverify)


router.post('/login', login)

module.exports = router;
