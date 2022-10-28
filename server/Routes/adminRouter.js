const { getServices, addServices } = require("../Controller/adminController")

const router = require("express").Router()

router.get('/services', getServices)

router.post('/addservices', addServices)

module.exports = router