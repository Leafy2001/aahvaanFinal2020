const nodemailer = require('../config/nodemailer');


module.exports.newUser = (user) =>{

    let HTMLString = nodemailer.renderTemplate({
        user: user
    },'/mailUser.ejs');

    nodemailer.transporter.sendMail({
        from:'parmarshashank11@gmail.com',
        to: user.email,
        subject: "Successfully Registered",
        html : HTMLString
        
        // `<h1>You are successfully registered</h1>Your Details are as follows:<br>
        // Name: ${user.pName}<br>
        // College: ${user.college}<br>
        // Stay at DTU: ${user.stay}<br>
        // Email: ${user.email}<br>
        // Event: ${user.event}<br>
        // Your Unique Token: ${user._id}<br>
        // Keep this Safely for fututre payment use`


    }, (err, info) => {
        if(err){
            console.log("Error in sending mail", err);
            return;
        }
        console.log("Message Sent",info);
        return;
    });
}

module.exports.newTeam = (team) =>{

    let HTMLString = nodemailer.renderTemplate({
        team: team
    },'/mailTeam.ejs');

    nodemailer.transporter.sendMail({
        from:'parmarshashank11@gmail.com',
        to: team.email,
        subject: "Successfully Registered",
        html : HTMLString
        
        
        // `<h1>You are successfully registered</h1>Your Details are as follows:<br>
        // Team Leader Name: ${team.cName}<br>
        // Total Participants: ${team.totalParticipants}<br>
        // College: ${team.college}<br>
        // Stay at DTU: ${team.stay}<br>
        // Email: ${team.email}<br>
        // Event: ${team.event}<br>
        // Your Unique Token: ${team._id}<br>
        // Keep this Safely for fututre payment use`


    }, (err, info) => {
        if(err){
            console.log("Error in sending mail", err);
            return;
        }
        console.log("Message Sent",info);
        return;
    });
}