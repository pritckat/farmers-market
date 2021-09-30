const mongoose = require('mongoose')
// const Item = require('./Item')

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    items: {
        type: Array,
        
    },
  })

  module.exports = mongoose.model('Cart', CartSchema)