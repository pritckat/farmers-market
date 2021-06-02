const express = require("express")
const router = express.Router()
const storeController = require('../controllers/store')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', storeController.getStores)
router.get('/:id', storeController.getStore)
router.post('/createStore', storeController.createStore)

module.exports = router