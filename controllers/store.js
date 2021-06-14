const Store = require("../models/store")

module.exports = {
    getStores: async (req,res) => {
        const stores = await Store.find()
        res.render('stores.ejs', {stores: stores})
    },
    createStore: async (req,res) => {
        try{
            console.log(req.body)
            const store = await Store.create({
                name: req.body.name,
                user: req.user._id,
            })
            console.log('Store created')
            res.redirect(`/stores/${store._id}`)
        }catch(err){
            console.log(err)
        }
    },
    getStore: async (req,res) => {
        try {
            const store = await Store.findOne({_id: req.params.id})
            res.render('store', {store: store})
        }catch(err){
            console.log(err)
        }
    },
    updateStore: async (req,res) => {
        try {

        }catch(err){
            console.log(ErrorEvent)
        }
    },
    deleteStore: async (req,res) => {
        try{

        }catch(err){
            console.log(err)
        }
    },
}