const StoreSchema = new mongoose.Schema({
    name: {type: String},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
  })

  module.exports = mongoose.model('Store', StoreSchema)