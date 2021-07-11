const Cart = require("../models/Cart")

module.exports = {
    getCart: async (req,res) => {
        try {
            console.log(req.user)
            await Cart.findOneAndUpdate({user: req.user.id}, { $set: { user: req.user.id }}, { upsert: true  })
            const cart = await Cart.findOne({user: req.user.id})
            console.log(cart)
            res.render('cart.ejs', {cart: cart})
        } catch (err) {
            console.log(err)
        }
    },
    addToCart: async (req,res) => {
        try {

        } catch (err) {
            console.log(err)
        }
    }
}