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
router.post('/:id/items/:id/updateItem', itemController.updateItem)
router.post('/:id/items/:id/deleteItem', itemController.deleteItem)
module.exports = router