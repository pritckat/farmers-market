const Cart = require("../models/Cart")

module.exports = {
    getCart: async (req,res) => {
        try {
            const cart = await Cart.findOneOrCreate(req.params.user)
            console.log(cart)
            res.render('cart.ejs', {cart: cart})
        } catch (error) {
            console.log(error)
        }
    }
}