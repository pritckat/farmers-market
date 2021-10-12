const express = require("express")
const router = express.Router()
const itemController = require('../controllers/item')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', itemController.getItems)
router.get('/:id', itemController.getItem)
router.get()
router.get()
module.exports = router