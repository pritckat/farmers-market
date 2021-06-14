const express = require("express")
const router = express.Router()
const storeController = require('../controllers/store')
const itemController = require('../controllers/item')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', storeController.getStores)
router.get('/:id', storeController.getStore)
router.post('/createStore', storeController.createStore)
router.post('/:id/createItem', itemController.createItem)
router.get('/:id/items/:id', itemController.getItem)
module.exports = router