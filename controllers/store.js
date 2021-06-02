const { Store } = require("express-session")

module.exports = {
    getStores: (req,res) => {
        res.render('stores.ejs')
    },
    createStore: (req,res) => {
        try{
            await Store.create({
                name: req.body.name,
                user: req.user._id,
            })
            console.log('Store created')
            res.redirect('/store')
        }catch(err){
            console.log(err)
        }
    },
    getStore: (req,res) => {
        try {
            const store = await Store.findOne({_id: req.params.id})
            res.render('store', {store: store})
        }catch(err){
            console.log(err)
        }
    },
}