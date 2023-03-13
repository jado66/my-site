import { twiml } from 'twilio';
import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const VoiceResponse = twiml.VoiceResponse;

export default async function handler(req, res) {
  // if (req.method === 'POST') {
    // Use the Twilio Node.js SDK to build an XML response
   const twiml = new VoiceResponse();




  // Check if there is a speech result from the caller
  if (req.body.SpeechResult) {
    // Repeat the speech result back to the caller

    const completion = await openai.createCompletion({
      model: 'text-davinci-002',
      prompt: req.body.SpeechResult,
      temperature: 0.9,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 3500,
    });

    const output = completion.choices[0].text

    twiml.say({ voice: 'alice' }, output);
  }

  // Gather speech input from the caller
  const gather = twiml.gather({
    input: 'speech',
    timeout: 5,
    speechTimeout: 'auto'
  });

  // Say a prompt to the caller
  gather.say({ voice: 'alice' }, 'Please say something and I will repeat it back to you.');

  // Render the response as XML in reply to the webhook request
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(twiml.toString());
  
}