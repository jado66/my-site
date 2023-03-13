import { twiml } from 'twilio';
import { Configuration, OpenAIApi } from 'openai';

const VoiceResponse = twiml.VoiceResponse;

// Create an instance of the OpenAIApi class
const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Replace with your API key
  engine: 'text-davinci-003' // Specify the engine name
}));

export default async function handler(req, res) {
  // if (req.method === 'POST') {
    // Use the Twilio Node.js SDK to build an XML response
   const twiml = new VoiceResponse();

  // Check if there is a speech result from the caller
  if (req.body.SpeechResult) {
    // Send a request to the text-davinci-003 model with the speech result as the prompt

    try{
      twiml.say({ voice: 'alice' }, "I'm thinking of a response for "+req.body.SpeechResult)
      await openai.createCompletion({
        prompt: req.body.SpeechResult,
        maxTokens: 3000, // Specify the maximum number of tokens to generate
        temperature: 0.5, // Specify the randomness of the generation
        stop: '\n' // Specify a stop sequence to end the generation
      })
        // Get the generated text from the result object
      const text = result.data.choices[0].text;
        // Output the generated text to the caller
  
      const gather = twiml.gather({
        input: 'speech',
        timeout: 5,
        speechTimeout: 'auto'
      });
  
  
      gather.say({ voice: 'alice' }, text);
      // Render the response as XML in reply to the webhook request
      res.setHeader('Content-Type', 'text/xml');
      res.status(200).send(twiml.toString());
    }
    catch{
      console.error(error);
      twiml.say({ voice: 'alice' }, error);

      res.status(200).send(twiml.toString());
    }
    
  
  } else {
    // Gather speech input from the caller
    const gather = twiml.gather({
      input: 'speech',
      timeout: 5,
      speechTimeout: 'auto'
    });

    // Say a prompt to the caller
    gather.say({ voice: 'alice' }, 'Try asking me a question.');

    // Render the response as XML in reply to the webhook request
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send(twiml.toString());
  }
}