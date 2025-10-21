const mongoose = require("mongoose");

// --- Sub-schema: Profile ---
const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date },
  gender: { type: String, enum: ["male", "female", "other"] },
  photos: [{ type: String }],
  aboutMe: { type: String },
});

// --- Sub-schema: Location ---
const LocationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    default: "Point",
  },
  coordinates: {
    type: [Number], // [longitude, latitude]
    required: true,
  },
});

// --- Sub-schema: Detail ---
const DetailSchema = new mongoose.Schema({
  height: { type: Number },
  interested: [{ type: String }],
  education: { type: String },
});

// --- Main User schema ---
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  status: { type: Boolean, default: true },
  profile: ProfileSchema,
  location: LocationSchema,
  detail: DetailSchema,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// --- Index for GeoJSON location (important for nearby queries) ---
UserSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("User", UserSchema);
