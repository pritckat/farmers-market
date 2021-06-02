const Item = require('../models/item')

module.exports = {
    getItem: (req,res) => {
        res.render('item.ejs')
    },
    getItems: (req,res) => {
        res.render('items.ejs')
    },
}