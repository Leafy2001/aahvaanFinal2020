//requiring mongoose
const mongoose = require('mongoose');

//defining the database Schema
const userSchema = mongoose.Schema({
    name:{
        type:String, //type of data entry
        required:true //whether its needed or not
    },
    email:{
        type:String, //type of data entry
        required:true //whether its needed or not
    },
    college:{
        type:String, //type of data entry
        required:true //whether its needed or not
    },
    stay:{
        type:String, //type of data entry
        required:true //whether its needed or not
    },
    events:{
        type:String, //type of data entry
        required:true //whether its needed or not
    },
    tokenNumber:{
        type:String, //type of data entry
        required:false //whether its needed or not
    }
    // ,
    // date:{
    //     type:Date,
    //     required:false
    // },
    // category:{
    //     type:String,
    //     required:true
    // }
},{
    timestamps: true
});

//create a model, give it a name and define a schema
const User = mongoose.model('User', userSchema);

//export the model 
module.exports = User; 