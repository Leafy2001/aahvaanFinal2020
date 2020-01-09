//requiring mongoose
const mongoose = require('mongoose');

//defining the database Schema
const contingnetSchema = mongoose.Schema({
    name:{
        type:String, //type of data entry
        required:true //whether its needed or not
    },
    teamMemberCount:{
        type:Number, //type of data entry
        required:true //whether its needed or not
    },
    teamMemberName:[
        {
            name: {type: String, required:true}
        }
    ],
    email:{
        type:String, //type of data entry
        required:true //whether its needed or not
    },
    college:{
        type:String, //type of data entry
        required:true //whether its needed or not
    },
    stay:{
        type:Boolean, //type of data entry
        required:true //whether its needed or not
    },
    events:{
        type:String, //type of data entry
        required:true //whether its needed or not
    },
    tokenNumber:{
        type:String, //type of data entry
        required:true //whether its needed or not
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
const Contingent = mongoose.model('Contingent', contingnetSchema);

//export the model 
module.exports = Contingent; 