const Item = require('../models/item')

module.exports = {
    getItem: async (req,res) => {
        const item = await Item.findOne({_id: req.params.id})
        res.render('item.ejs', {item: item})
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
            const item = await Item.findOneAndUpdate({_id: req.params.id},
                {name: req.body.name,
                    cost: req.body.cost
                })
            res.redirect(`/stores/${item.store}/items/${item._id}`)
        } catch (error) {
            
        }
    },
}