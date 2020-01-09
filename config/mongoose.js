//requiring the mongoose library
const mongoose = require('mongoose');

//setting up the connection to the mongodb database
// const MONGODB_URI='mongodb+srv://dexter:Tarun@1998@cluster0-rc7y3.mongodb.net/test?retryWrites=true&w=majority'

const onlineL = 'mongodb+srv://dexter:Tarun@1998@cluster0-rc7y3.mongodb.net/test?retryWrites=true&w=majority';
// mongoose.connect(MONGODB_URI,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// });
const abc = 'mongodb://localhost/aahvaanABC'
mongoose.connect(process.env.MONGODB_URI || abc,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
    console.log('Mongoose Connected Bro!!!')
});


//setting up the connection variable
const db = mongoose.connection;

//error handling, display the error
db.on('error',console.error.bind(console, "ERROR IN DATABASE"));

//opening the connection to the database
db.once('open', function(){
    console.log("Connected to the Registration Database!!!")
});

//export the database variable so as to use the connection in other files
module.exports = db;
