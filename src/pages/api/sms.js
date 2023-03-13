import { twiml } from 'twilio';
import { Configuration, OpenAIApi } from 'openai';

const MessagingResponse = twiml.MessagingResponse;

// Create an instance of the OpenAIApi class
const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Replace with your API key
  engine: 'text-davinci-003' // Specify the engine name
}));

export default async function handler(req, res) {
  
  const twiml = new MessagingResponse();

  if (req.body.Body) {

    try{
      
      await openai.createCompletion({
        prompt: req.body.Body,
        maxTokens: 3000, // Specify the maximum number of tokens to generate
        temperature: 0.5, // Specify the randomness of the generation
        stop: '\n' // Specify a stop sequence to end the generation
      })
        // Get the generated text from the result object
      const text = result.data.choices[0].text;
        // Output the generated text to the user
  
      twiml.message(text);
      // Render the response as XML in reply to the webhook request
      res.setHeader('Content-Type', 'text/xml');
      res.status(200).send(twiml.toString());
    }
    catch{
      console.error(error);
      twiml.message(error);

      res.status(200).send(twiml.toString());
    }
    
  
  } else {
    // Say a prompt to the user
    twiml.message('Try telling me something.');

    // Render the response as XML in reply to the webhook request
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send(twiml.toString());
  }
}