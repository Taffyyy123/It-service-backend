const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    titleMn: { type: String, required: true },
    contentMn: { type: String, required: true },
    infoTitleMn: { type: String },
    infoContentMn: { type: String },
    titleEn: { type: String, required: true },
    contentEn: { type: String, required: true },
    infoTitleEn: { type: String },
    infoContentEn: { type: String },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

const postModel = mongoose.model("Post", PostSchema);
module.exports = postModel;
