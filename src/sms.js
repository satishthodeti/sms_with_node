require("dotenv").config(); // Load environment variables
const twilio = require("twilio");

// Load Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Twilio client instance
const client = twilio(accountSid, authToken);

/**
 * Send an SMS using Twilio
 * @param {string} phone - The recipient's phone number
 * @param {string} message - The SMS content
 */
const sendSms = async (phone, message) => {
  try {
    const response = await client.messages.create({
      body: message,
      to: phone, // The recipient's phone number
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
    });
    console.log("Message sent successfully! SID:", response.sid);
    return response.sid;
  } catch (error) {
    console.error("Error sending SMS:", error.message);
    throw new Error("Failed to send SMS");
  }
};

module.exports = sendSms;
