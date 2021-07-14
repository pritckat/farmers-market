const Store = require("../models/store")
const Item = require("../models/item")
const User = require("../models/User")

module.exports = {
    getStores: async (req,res) => {
        const stores = await Store.find()
        res.render('stores.ejs', {stores: stores, user: req.user})
    },
    createStore: async (req,res) => {
        try{
            const store = await Store.create({
                name: req.body.name,
                user: req.user._id,
            })
            const user = await User.findOneAndUpdate(
                {_id: req.user},
                {store: store._id}
                )
            console.log('Store created')
            res.redirect(`/stores/${store._id}`)
        }catch(err){
            console.log(err)
        }
    },
    getStore: async (req,res) => {
        try {
            const store = await Store.findOne({_id: req.params.id})
            const items = await Item.find({store: store._id})
            console.log(items)
            res.render('store', {store: store, items: items, user:req.user})
        }catch(err){
            console.log(err)
        }
    },
    updateStore: async (req,res) => {
        try {

        }catch(err){
            console.log(err)
        }
    },
    deleteStore: async (req,res) => {
        try{

        }catch(err){
            console.log(err)
        }
    },
}