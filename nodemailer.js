const nodemailer = require('nodemailer');
const express = require("express");

// Create a transporter object using your Gmail credentials
const sendMail = async (req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ramprakashdas64@gmail.com',
          pass: 'harshranjan63',
        },
      });
      
      // Create email data
      const mailOptions = {
        from: 'ramprakashdas64@gmail.com',
        to: 'harshranjan63@gmail.com', // Replace with the recipient's email
        subject: 'Hello from Node.js',
        text: 'This is a test email sent from Node.js using nodemailer.',
      };
      
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email: ', error);
        } else {
          console.log('Email sent: ', info.response);
        }
      });
}

module.exports = sendMail;