const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const ServiceSchema = new Schema({
  businessImage: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    required: true,
  },
  culture: {
    type: String,
    required: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  FromHours: {
    type: String,
    required: true,
  },
  ToHours: {
    type: String,
    required: true,
  },
  WorkDays: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  provider_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  averageRating: {
    type: String,
    required: false,
  },
  flag: {
    type: Boolean,
    default: false,
  },
  Subscribed: {
    type: Boolean,
    default: false,
  },
  Payment_id: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  provider_Name: {
    type: String,
    required: true,
  },
  rate: {
    type: Array,
    required: false,
  },
  rating: {
    type: String,
    required: false,
    default: "0",
  },
  UsersIdRate: {
    type: Array,
    required: false,
  },
  
},
{timestamp : true}
);

const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;
