const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
  {
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },

    theatre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Theatre",
      required: true,
    },

    showDate: {
      type: Date,
      required: true,
    },

    showTime: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    totalSeats: {
      type: Number,
      required: true,
      default: 100,
    },

    bookedSeats: {
      type: [String],
      default: [],
    },

    heldSeats: {
      type: [String],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Show", showSchema);
