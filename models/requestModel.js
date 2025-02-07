const mongoose = require("mongoose");
const { Schema } = mongoose;

const requestSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    request: { type: String, required: true },
  },
  { timestamps: true }
);
const requestModel = mongoose.model("request", requestSchema);
module.exports = requestModel;
