const Item = require('../models/item')

module.exports = {
    getItem: (req,res) => {
        res.render('item.ejs')
    },
    getItems: (req,res) => {
        res.render('items.ejs')
    },
    createItem: async (req,res) => {
        try{
            console.log(req.params)
            const item = await Item.create({
                name: req.body.name,
                user: req.user._id,
                store: req.params.id,
                cost: req.body.cost
            })
            console.log('Item created')
            res.redirect(`/stores/${req.params.id}`)
        }catch(err){
            console.log(err)
        }
    },
    deleteItem: async (req,res) => {
        try {
            
        } catch (error) {
            
        }
    },
    updateItem: async (req,res) => {
        try {
            
        } catch (error) {
            
        }
    }
}