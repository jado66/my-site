import { Twilio } from 'twilio';

const client = new Twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

export default async function handler(req, res) {
 
    const query = JSON.parse(req.body)

    const {toNumber} = query

    // Send a verification code to the user's phone number
    try {
        
        const verification = await client.verify.v2.services(process.env.SID)
                .verifications
                .create({to: toNumber, channel: 'sms'})
        
        console.log(verification.status)
        res.status(200).json({
            success:'true',
            sid:verification.sid,
            msg:"OTP sent to your device."
        })
        

    } catch (error) {
        console.log(`Error during SMS sending: ${error}`);
        res.status(500).json({
            success:'false',
            sid:null,
            msg:`Error during SMS sending: ${JSON.stringify(error)}`
        })
    }
}