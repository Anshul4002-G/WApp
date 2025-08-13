const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  iss: { type: String },
  azp: { type: String },
  aud: { type: String },
  sub: { type: String, required: true },
  email: { type: String, required: true },
  email_verified: { type: String },
  nbf: { type: Number },
  name: { type: String, required: true },
  picture: { type: String },
  given_name: { type: String }, // Corrected: was 'tyepe'
  family_name: { type: String },
  iat: { type: Number },
  exp: { type: Number },
  jti: { type: String },
});

module.exports = mongoose.model("user", UserSchema);
