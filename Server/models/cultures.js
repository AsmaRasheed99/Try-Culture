const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CultureSchema = new Schema({
     
    Culture: {
        type : String,
        required : true
    },
    image: {
        type : String,
        required : true
    },
    HeroImage: {
        type : String,
        required : true
    },
    Information: {
        type : String,
        required : true
    },
    },
     {timestamp : true}
    )

    // 2- export the model with the schema
    module.exports = mongoose.model('Culture',CultureSchema);