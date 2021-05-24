const ItemSchema = new mongoose.Schema({
    name: {type: String},
    cost: {type: Number},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store"
    },
  })