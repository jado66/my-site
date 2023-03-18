import { Twilio } from 'twilio';

const client = new Twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
const verify = client.verify;

export default async function handler(req, res) {
 
    const query = JSON.parse(req.body)

    const {toNumber, message, code} = query

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
        await client.messages.create({
          body: message,
          from: process.env.TEST_NUMBER,
          to: toNumber,
        });
      
        res.status(200).json({
          success: true,
          msg: `Message sent to ${toNumber}`,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          msg: 'Failed to send message',
        });
      }
   
}