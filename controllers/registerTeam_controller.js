// const db = require('../config/mongoose');
const Contingent = require('../models/register-contingent');
const confirmationMail = require('../mailers/registration_mailer');

module.exports.displayContingent = function(req, res){
    Contingent.find({},(err,team)=>{
        if(err){
            console.log(err);
        }
        else
            res.json(team);
    })
};

module.exports.registerContingent = async function(req, res){
    const now = Date.now();
    console.log(now);
    req.body.tokenNumber = `AahvaanDTU2K20-${now}`;
    console.log(req.body);
    try{
        var team  = await Contingent.create(req.body);
        res.json(team);
        confirmationMail.newTeam(team);
    }catch(err){
        console.log("ERROR IN POPULATING THE DB", err);
        return res.json(err);
    }
    // team = await team.populate('team', 'email cName college stay event totalParticipants _id').execPopulate();
   
}

module.exports.confirmData = function(req, res){
    console.log(req.body);
    return res.render('confirmation_contingent', {
      data : req.body
    });

}