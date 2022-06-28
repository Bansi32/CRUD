const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
    },
    model: {
      type: String,
      required: true,
    },
    ram: {
      type: Number,
      required: true,
    },
    screenSize: {
      type: Number,
      required: true,
    },
    prise: {
      type: Number,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
