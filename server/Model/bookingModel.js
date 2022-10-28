const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    bookingDate: {
      type: Date,
      required: true,
    },
    bookingTime: {
      type: String,
      required : true
    },
    booked: {
      type: Boolean,
      default: false,
    },
    user_email: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("booking", bookingSchema);
