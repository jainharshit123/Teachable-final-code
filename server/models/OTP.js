const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 5*60, // The document will be automatically deleted after 5 minutes of its creation time
    },
});

// function -> to send emails
async function sendVerificationEmail(email, otp){
    try{
        // create a transporter to send emails
        // define the mail options
        // send email
        const mailResponse = await mailSender(email, "Verification Email from Teachable", emailTemplate(otp));
        console.log("Email Sent Successfully: ", mailResponse.response);
    }
    catch(error){
        console.log("error occured while sending email: ", error);
        throw error;
    }
}

OTPSchema.pre("save", async function (next){
    console.log("New document saved to database");

    // Only send an email when a new document is created
    if(this.isNew){
        await sendVerificationEmail(this.email, this.otp);
    }
    next();
});

module.exports = mongoose.model("OTP", OTPSchema);