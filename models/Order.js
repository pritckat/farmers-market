const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    items: {
        type: Array,
    }
  })

  module.exports = mongoose.model('Order', OrderSchema)