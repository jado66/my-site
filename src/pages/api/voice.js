import { twiml } from 'twilio';
const VoiceResponse = twiml.VoiceResponse;


export default function handler(req, res) {
  if (req.method === 'POST') {
    // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();
    twiml.say({ voice: 'alice' }, 'hello world!');

    // Render the response as XML in reply to the webhook request
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send(twiml.toString());
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}