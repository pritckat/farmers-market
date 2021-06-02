const Store = require("../models/store")

module.exports = {
    getStores: (req,res) => {
        res.render('stores.ejs')
    },
    createStore: async (req,res) => {
        try{
            console.log(req.body)
            const store = await Store.create({
                name: req.body.name,
                user: req.user._id,
            })
            console.log('Store created')
            res.render('store', {store: store})
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
}