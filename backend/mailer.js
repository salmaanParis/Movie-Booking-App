// mailer.js

const nodemailer = require('nodemailer');

// Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Store email in .env
    pass: process.env.EMAIL_PASS, // Store password in .env
  },
});

// Function to send email
const sendEmail = async (email, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendEmail };
