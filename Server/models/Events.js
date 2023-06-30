const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Events = new Schema({
     
    EventName: {
        type : String,
        required : true
    },
    Date: {
        type : String,
        required : true
    },
    Time: {
        type : String,
        required : true
    },
    Details: {
        type : String,
        required : true
    },
    Culture: {
        type : String,
        required : true
    },
    Organizer: {
        type : String,
        required : true
    },
    location: {
        type : String,
        required : true
    },
    userId: {
        type: Schema.Types.ObjectId,
          required : true
      },

    },
     {timestamp : true}
    )

    // 2- export the model with the schema
    module.exports = mongoose.model('Events',Events);