const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

const db = require('./config/mongoose');
const Task = require('./models/register-single');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended: true}));
app.use(express.urlencoded());


app.use(express.static('assets'));


app.set('view engine', 'ejs');



app.set('views', './views');

app.use('/', require('./routes/index'));

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});
console.log(__dirname);
// if(process.env.NODE_ENV === 'development'){
//     // app.use(express.static(__dirname + 'client/build'));
//     console.log(__dirname + 'client/build');
//     app.get('*', (req,res)=>{
//         res.sendFile(path.join(__dirname + '/client/public/index.html'));
//     });
// }

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
});