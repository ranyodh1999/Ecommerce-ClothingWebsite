const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  productIds: {
    type: [String],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
