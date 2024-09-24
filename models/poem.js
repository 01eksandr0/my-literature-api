import { Schema, model } from "mongoose";
const poem = new Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
    required: [true, "Set name for contact"],
  },
  date: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: [true, "Set name for contact"],
  },
});
export const Poem = model("literatures", poem);
