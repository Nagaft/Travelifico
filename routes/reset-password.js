const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

// Create a transporter object using your Gmail credentials
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "travelificoagencia@gmail.com",
        pass: "T12345678",
    },
});

// Generate a random alphanumeric token
function generateResetToken() {
    const length = 20; // Adjust the length of the token as needed
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let resetToken = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        resetToken += characters.charAt(randomIndex);
    }

    return resetToken;
}

// Function to send the password reset email
function sendPasswordResetEmail(email, resetToken) {
    const mailOptions = {
        from: "travelificoagencia@gmail.com",
        to: email,
        subject: "Password Reset",
        text: `Click the following link to reset your password: http://yourwebsite.com/reset?token=${resetToken}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Email sending error:", error);
        } else {
            console.log("Email sent:", info.response);
        }
    });
}

// Endpoint to initiate password reset
app.post("/reset-password", (req, res) => {
    const { email } = req.body;

    // Generate a reset token and send the email
    const resetToken = generateResetToken();
    sendPasswordResetEmail(email, resetToken);

    // Respond to the client
    res.json({ success: true });
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
