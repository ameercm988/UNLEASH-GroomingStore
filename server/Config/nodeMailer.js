const { sign } = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const nodeMail = async (email) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ameercm988@gmail.com",
      pass: process.env.NODEMAILER_PASS,
    },
  });

  //creating jwt token
  let jwtKey = process.env.JWT_SECRET_KEY

  let data = email
  
  const token = sign({data}, jwtKey, {expiresIn : 60 * 60 * 24 * 1000})


  let mailDetails = {
    from: "ameercm988@gmail.com",
    to: email ,
    subject: "Sign up verification",
    text: `Welcome to Unleash - pet grooming store, <br> <a href='http://localhost:3000/verify/${token}'> Click on the link </a>`
    
    
  };
  
  

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
};

module.exports = nodeMail;
