const { signup, verify, reverify, login, googleVerify, authorisation, appointmentBooking } = require("../Controller/userController");
const userVerify = require("../Middleware/middleWare");

const router = require("express").Router();

router.post('/google-verify', googleVerify)

router.post("/signup", signup);

router.get('/verify/:token', verify)

router.patch('/reverify', reverify)

router.get('/authorise', userVerify, authorisation)

router.post('/appointment',  appointmentBooking)

router.post('/login', login)

module.exports = router;
