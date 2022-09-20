/*
{ 
    title: {string, mandatory, enum[Mr, Mrs, Miss]},
    name: {string, mandatory},
    phone: {string, mandatory, unique},
    email: {string, mandatory, valid email, unique}, 
    password: {string, mandatory, minLen 8, maxLen 15},
    address: {
      street: {string},
      city: {string},
      pincode: {string}
    },
    createdAt: {timestamp},
    updatedAt: {timestamp}
  }
  */

  const mongoose = require("mongoose")

  const userSchema = new mongoose.Schema({
    title: {
      type : String,
      required : true,
      enum : ["Mr", "Mrs", "Miss"]
    },
    name : {
      type : String,
      required : true
    },
    phone: {
      type : String,
      unique : true,
      required : true
  },
  email: {
    type : String,
    required : true,
    unique : true
  },
  password: {
    type : String, required : true
  },

  address: {
    street: String,
    city: String,
    pincode: String
  }
  }, {timestamps : true});

  module.exports = mongoose.model("User", userSchema)