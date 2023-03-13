import { twiml } from 'twilio';
import { Configuration, OpenAIApi } from 'openai';

const MessagingResponse = twiml.MessagingResponse;

// Create an instance of the OpenAIApi class
const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Replace with your API key
  engine: 'text-davinci-003' // Specify the engine name
}));

let numberOfThings = 0

const responses = [
  'You just told me ',
  'You said ',
  'I can do this all day. Again you said ',
  'Please stop, this hurts. You told me ',
  'Just kidding, I am a robot. You said ',
  'Just kidding again, I really am tired of this game. You said '
]

export default async function handler(req, res) {
 
  const twiml = new MessagingResponse();

  if (req.body.Body) {

    try{
      numberOfThings++

      const aliceResponse = responses[numberOfThings%6]

      twiml.message(aliceResponse+req.body.Body+". Try telling me something else")
  
      res.setHeader('Content-Type', 'text/xml');
      res.status(200).send(twiml.toString());
    }
    catch{
      console.error(error);
      twiml.message(error);

      res.status(200).send(twiml.toString());
    }
    
  
  } else {
    // Send a prompt to the user
    twiml.message('Try telling me something.');

    // Render the response as XML in reply to the webhook request
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send(twiml.toString());
  }
}