const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: true,
    default:
      "https://images.unsplash.com/photo-1656844447295-b4082a05813c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
});

const Review = mongoose.models.review || mongoose.model("review", ReviewSchema);

export default Review;
