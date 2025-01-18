# SMS Sending Service

A simple Node.js app using the **Twilio API** to send SMS messages via a RESTful endpoint.

---

## Features

- 📱 **Send SMS**: Send text messages to any phone number.
- 🔒 **Secure**: Use environment variables for sensitive credentials.
- 🛠️ **Customizable**: Extend functionality for more features.
- 📦 **Lightweight**: Minimal dependencies for fast deployment.

---

## Prerequisites

- **Node.js** (v14+)
- **Twilio Account**: Get your `ACCOUNT_SID`, `AUTH_TOKEN`, and a phone number from [Twilio](https://www.twilio.com/try-twilio).

---

## Getting Started

1. **Clone the Repo**

    ```bash
    git clone https://github.com/your-username/sms-sending-service.git
    cd sms-sending-service
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file with:

    ```
    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_PHONE_NUMBER=your_twilio_phone_number
    ```

4. **Start the Server**

    ```bash
    npm start
    ```

    The server will run on [http://localhost:3000](http://localhost:3000).

---

## API Endpoint

### `POST /send-sms`

Sends an SMS to the specified phone number.

**Request Body:**
```json
{
  "phoneNumber": "+1234567890",
  "message": "Your message goes here"
}
