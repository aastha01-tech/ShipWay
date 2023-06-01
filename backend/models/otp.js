const mongoose = require('mongoose');
// require('../databases/connection')
const otpSchema = new mongoose.Schema(
  {
    email: String,
    code: String,
    expireIn: Number,
  },
  {
    timestamps: true,
    collection: 'otp', 
  }
);

const Otp = mongoose.model('Otp', otpSchema);

module.exports = Otp;
