const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;


//1- Create a new schema 
const paymentSchema = new Schema({

    cardholder: {
        type: String,
        required: false
      },
      ServiceId: {
        type: Schema.Types.ObjectId,
        required: true
      },
      userId: {
        type: Schema.Types.ObjectId,
        required: true
      },
      cvv: {
        type: Number,
        required: true
      },
      CardNumber : {
        type: Number,
        required: true
      },
      
  },
   {timestamp : true}
  )
    // 2- export the model with the schema
    module.exports = mongoose.model('Payments',paymentSchema);