export default async function handler(req, res) {

    if (!req.body) {
        throw new Error("Request body is empty");
      }

    const query = JSON.parse(req.body)

    const TO_NUMBER = query.toNumber
    const Text = query.message
    const LOCALE = query.locale
    
    const accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
    const authToken = process.env.AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
    
    const client = require('twilio')(accountSid, authToken);
    
    client.messages
        .create({
            body: Text,
            to: TO_NUMBER, // Text this number
            from: process.env.TEST_NUMBER, // From a valid Twilio number
        })
        .then(
            (message) => {
                console.log(message.sid)
                res.json({
                    success:true,
                    msg: `Call Placed Successfull: You should receive a call from ${SINCH_NUMBER}`
                })
            }
        ) 
        .catch((error) => {
            // You can implement your fallback code here
            console.log(error);
            res.json({
                success:true,
                msg: error
            })
          });
       
}