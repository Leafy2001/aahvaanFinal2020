// const db = require('../config/mongoose');
const User = require('../models/register-single');
const confirmationMail = require('../mailers/registration_mailer');
// const pdfgenerate = require('../config/pdf');

module.exports.display = function(req, res){
    User.find({},(err,sdata)=>{
        if(err){
            console.log(err);
        }
        else
            res.json(sdata);
    })
};

module.exports.register = async function(req, res){
    const now = Date.now();
    console.log(now);
    req.body.tokenNumber = `AahvaanDTU2K20-${now}`;
    console.log(req.body);
    try{
        var user  = await User.create(req.body);
        console.log("Usewr added");
        confirmationMail.newUser(user);
        res.json(user);
    }catch(err){
        console.log("ERROR IN POPULATING THE DB", err);
        res.render('failure');
    }
    // user = await user.populate('user', 'email pName college stay event _id').execPopulate();
    
}

module.exports.confirmData = function(req, res){
    console.log(req.body);
    return res.render('confirmation_single', {
      data : req.body
    });

}