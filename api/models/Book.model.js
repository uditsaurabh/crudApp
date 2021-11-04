const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    BookName: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    Author: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    Price: {
      type: String,
      required: true,
    },
    Published_Date: { type: String, required: true },
  },

  { timestamps: true },
  {
    writeConcern: {
      w: "majority",
      j: true,
      wtimeout: 1000,
    },
  }
);
BookSchema.index({ BookName: 1, Author: 1 }, { unique: true });
module.exports = mongoose.model("Book", BookSchema);
