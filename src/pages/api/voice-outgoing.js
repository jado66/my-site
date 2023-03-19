import { Twilio } from 'twilio';

const VoiceResponse = require('twilio').twiml.VoiceResponse;

const client = new Twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
const verify = client.verify;

export default async function handler(req, res) {
 
    const query = JSON.parse(req.body)

    const {toNumber, message, voice, code} = query

    console.log(JSON.stringify({
        toNumber:toNumber,
        message:message,
        voice:voice,
        code:code
    }))

    // Send a verification code to the user's phone number
    try {
        const verificationCheck = await verify.v2.services(process.env.SID).verificationChecks.create({
            to: toNumber,
            code: code
          });
          console.log(verificationCheck.status);
    } catch (error) {
        console.error(error);
    
        res.status(500)
        res.json({
            success:'false',
            sid:null,
            msg:"Incorrect OTP. Try again."
        })
        return
    }

    try {
        const response = new VoiceResponse();
        response.say({voice: "Polly.Kimberly",language:"en-US",speechRate: '1.5'},"This is a message from the Voice technical demo of the J-Apss website. You can call this number back for more demos. Here is the message: "+message);
    
        client.calls
          .create({
             twiml: response.toString(),
             to: toNumber,
             from: process.env.TEST_NUMBER
           })
          .then(call => console.log(call.sid));
       
        // Render the response as XML in reply to the webhook request
        res.status(200)
        res.json({
            success:true,
            msg:"You should expect a call from "+process.env.TEST_NUMBER
        })
    } catch (error) {
        console.log(error)
        res.status(400)
        res.json({
            success:false,
            msg:error
        })
    }
   
}