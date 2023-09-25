const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.use(bodyParser.json());

app.post('/send-verification-code', async (req, res) => {
  try {
    const { phoneNumber } = req.body.phoneNumber

    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    await client.messages.create({
      body: `tu codigo de travelifico es : ${verificationCode}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });

    res.status(200).json({ message: 'mensaje enviado correctamente' });
  } catch (error) {
    console.error('Error mandando SMS:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/verify-otp', (req, res) => {
    try {
      const { phoneNumber, userOTP } = req.body.phoneNumber;
  
      const storedOTP = otpStorage[phoneNumber];
  
      if (!storedOTP) {
        return res.status(400).json({ error: 'OTP not found. Please request a new OTP.' });
      }
  
      if (userOTP === storedOTP) {
      
        return res.status(200).json({ message: 'OTP verification successful' });
      } else {
        return res.status(401).json({ error: 'Invalid OTP' });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error.message);
      res.status(500).json({ error: 'Server error' });
    }
  });
  