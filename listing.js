const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default : "https://unsplash.com/photos/brown-and-green-trees-and-field-LHR-a19z1SA",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/brown-and-green-trees-and-field-LHR-a19z1SA"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
