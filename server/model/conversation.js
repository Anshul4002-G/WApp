const mongoose = require("mongoose");
const consversationSchema = mongoose.Schema(
  {
    members: { type: Array },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("conversation", consversationSchema);
