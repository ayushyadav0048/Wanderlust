const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    // filename: String,
    // url: {
    type: String,
    default: "https://unsplash.com/photos/people-are-walking-towards-the-sunset-by-the-ocean-bqII05VYuCw",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/people-are-walking-towards-the-sunset-by-the-ocean-bqII05VYuCw"
        : v,
    // },
    },
  // image: {
  //     type: String,
  //     default:  "https://unsplash.com/photos/people-are-walking-towards-the-sunset-by-the-ocean-bqII05VYuCw",

  //     set: (v) => v === "" ? "https://unsplash.com/photos/people-are-walking-towards-the-sunset-by-the-ocean-bqII05VYuCw" : v,
  // },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;












