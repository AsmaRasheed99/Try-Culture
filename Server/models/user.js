const mongoose = require('mongoose');


const Schema = mongoose.Schema;

//1- Create a new schema 
const userSchema = new Schema({
     
    firstName: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    message:{
        type : Array,
        required : false
    },
    role:{
        type : Number,
        required : true
    },
    image:{
        type : String,
        required: false
    },
    phone:{
        type : String,
        required: false   
    },
    resetPin:{
        type : Number,
        required : false,
    },
    
    },
     {timestamp : true}
    )

    // 2- export the model with the schema
    module.exports = mongoose.model('User',userSchema);