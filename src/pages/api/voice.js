import { twiml } from 'twilio';
const VoiceResponse = twiml.VoiceResponse;

export default function handler(req, res) {
  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();

  // Check if there is a speech result from the caller
  if (req.body.SpeechResult) {
    // Repeat the speech result back to the caller
    twiml.say({ voice: 'alice' }, req.body.SpeechResult);
  }

  // Gather speech input from the caller
  const gather = twiml.gather({
    input: 'speech',
    timeout: 5,
    speechTimeout: 'auto',
    action: '/api/twilio' // The URL of your API
  });

  // Say a prompt to the caller
  gather.say({ voice: 'alice' }, 'Please say something and I will repeat it back to you.');

  // Render the response as XML in reply to the webhook request
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(twiml.toString());
}