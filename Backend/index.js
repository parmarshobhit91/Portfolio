require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/contact", async (req, res) => {
    const { name, email, message, mobileNumber } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `New contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nContact Number: ${mobileNumber}\nMessage: ${message}`,
    };

    const userMailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Thank you for contacting me",
        text: `Dear ${name},\n\nThank you for contacting me. I will get back to you soon.\n\nRegards,\nShobhit Parmar`,
    };

    try {
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(userMailOptions);
        res.json({ message: "Message sent successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error sending email" });
        }
     
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
