const express = require("express");
const bodyParser = require("body-parser");
const sendSms = require("./sms");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

// HTTP POST endpoint to send SMS
app.post("/send-sms", (req, res) => {
  try {
    const { phoneNumber, message } = req.body;

    if (!phoneNumber || !message) {
      return res.status(400).json({
        success: false,
        message: "Phone number and message are required.",
      });
    }

    sendSms(phoneNumber, message);
    res.status(200).json({
      success: true,
      message: "SMS request received. Check logs for status.",
    });
  } catch (error) {
    throw error;
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
