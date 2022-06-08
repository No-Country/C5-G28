import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  username: {
    type: String,
    unique: false,
  },
  title: {
    type: String,
    unique: false,
  },
  content: {
    type: String,
    unique: false,
  },
  urlPhoto: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: [String],
  },
  categories: {
    type: [String],
  },
});

export default model("PostSchema", PostSchema);
