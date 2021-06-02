const express = require("express")
const router = express.Router()
const authController = require('../controllers/auth')
const storeController = require('../controllers/store')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', storeController.getStores)

module.exports = router