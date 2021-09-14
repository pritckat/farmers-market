const Item = require('../models/item')

module.exports = {
    getItem: async (req,res) => {
        const item = await Item.findOne({_id: req.params.id})
        res.render('item.ejs', {item: item})
    },
    getItems: (req,res) => {
        console.log('hi', req.user)
        res.render('items.ejs', {user: req.user._id})
    },
    createItem: async (req,res) => {
        try{
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
            console.log('trying to delete')
            const item = await Item.findOne({_id: req.params.id})
            const store = item.store
            console.log(item, store)
            await Item.deleteOne({_id: req.params.id})
            res.redirect(`/stores/${store}`)
        } catch (error) {
            console.log(error)
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
            console.log(error)
        }
    },
}