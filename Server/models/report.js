const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;


//1- Create a new schema 
const ReportSchema = new Schema({

    ReportText: {
        type: String,
        required: false
      },
      BlogId: {
        type: Schema.Types.ObjectId,
        required: true
      },
      UserId: {
        type: Schema.Types.ObjectId,
        required: true
      },
      Comment: {
        type: Object,
        required: true
      },
      flag: {
        type: Boolean,
        default: false
      },
 
      
  },
   {timestamp : true}
  )
    // 2- export the model with the schema
    module.exports = mongoose.model('Report',ReportSchema);