const Cart = require("../models/Cart")

module.exports = {
    getCart: async (req,res) => {
        try {
            console.log(req.user)
            await Cart.findOneAndUpdate({user: req.user.id}, { $set: { user: req.user.id }}, { upsert: true  })
            const cart = await Cart.findOne({user: req.user.id})
            console.log(cart)
            res.render('cart.ejs', {cart: cart})
        } catch (error) {
            console.log(error)
        }
    },
    getProfile: (req,res) => {
        console.log(req.session)
        // console.log('user:', req.user)
        try {
            res.render('profile.ejs', {user: req.user})
        } catch(error) {
            console.log(error)
        }
    },
}