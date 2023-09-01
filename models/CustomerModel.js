const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a movie name"]
    },
    name: {
      type: String,
      required: true,
      default: 0
    },
    address: {
      type: Number,
      required: true
    },
    birthdate: {
      type: Date,
      required: false
    },
    email: {
      type: String,
      required: true
    }
  },
  {
    timestamp: true
  }
)

const Customer = mongoose.model('customers', CustomerSchema)

module.exports = Customer