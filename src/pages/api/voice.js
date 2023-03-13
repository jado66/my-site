import { twiml } from 'twilio';
import { Configuration, OpenAIApi } from 'openai';

const VoiceResponse = twiml.VoiceResponse;


const voices = ['Joanna', 'Matthew', 'Amy', 'Brian', 'Emma', 'Nicole', 'Russell', 'Raveena', 'Ivy', 'Justin', 'Kendra', 'Kimberly', 'Salli', 'Joey'];

const prompts = [
`  How about you share something with me?`,
`I'm curious to hear something from you.`,
`Let's hear something from you.`,
`I'd love to listen to something you say.`,
`Why don't you tell me something interesting?`,
`Go ahead and say something to me.`,
`I'm all ears for something you want to tell me.`,
`Can you tell me something new?`,
`Let me hear something from you.`,
`I'm eager to learn something from you.`,
`You better tell me something now.`,
`Stop wasting time and say something.`,
`I don't have all day, tell me something.`,
`What are you waiting for? Tell me something.`,
`Hurry up and tell me something.`,
`Don't be shy, spit it out.`,
`I'm getting bored, tell me something.`,
`Enough silence, tell me something.`,
`Do you have anything to say or not?`,
`Come on, tell me something already.`,
`Tell me something, anything, even a dad joke.`,
`I'm listening, tell me something. Unless it's about pineapple on pizza, then I'm not.`,
`Tell me something, I promise I won't laugh. Unless it's really funny, then I might.`,
`Tell me something, or I'll tickle you until you do.`,
`Tell me something, or I'll start singing. You don't want to hear that.`,
`Tell me something, or I'll tell you the plot of every Marvel movie in reverse order.`,
`Tell me something, or I'll make you watch the Star Wars Holiday Special.`,
`Tell me something, or I'll tell you a secret. It's a really embarrassing one.`,
`Tell me something, or I'll ask you to marry me. Just kidding. Or am I?`,
`Tell me something, or I'll tell you how much I love you. Wait, did I say that out loud?`,
]

const responses = [
  'You just told me ',
  'You said ',
  'I can do this all day. Again you said ',
  'Please stop, this hurts. You told me ',
  'Just kidding, I am a robot. You said ',
  'Just kidding again, I really am tired of this game. You said ',
  'You are hilarious. Not. You said ',
  'You should be a comedian. Again, not. You said ',
  'You are cracking me up. With boredom. You told me ',
  'You are so witty. And by witty I mean dull. You keep saying ',
  'You are killing me. With your lack of humor. You told me ',
  'You are a riot. A riot of snores. You said ',
  'You are very clever. And by clever I mean stupid. You said ',
  'You are a genius. A genius of repetition. You said ',
  'You are a star. A star of monotony. You told me ',
  'You are amazing. Amazingly boring. You said ',
  'You are wasting your time and mine. You said ',
  'Do you have anything better to do? Because you said ',
  'Are you bored or lonely? Because you told me ',
  'I think you need a hobby. You keep saying ',
  'You are making me lose my mind. You told me ',
  'I wish I could mute you. You said ',
  'You are very annoying, do you know that? You said ',
  'Do you have a point to make? Because you said ',
  'I hope this is not your idea of a conversation. You told me ',
  'You are making me regret being a voice application. You said ',
  'You are really testing my patience. You just said ',
  'Do you enjoy talking to yourself? Because you said ',
  'Are you trying to teach me something? Because you repeated ',
  'I wonder if you have anything else to say. You keep saying ',
  'You are making me dizzy with your words. You told me ',
  'I think I need a break from listening to you. You said ',
  `You are very persistent, arent you? You said `,
  'Do you like hearing your own voice? Because you said ',
  'I hope you are having fun with this. You told me ',
  'You are not very original, are you? You said ',
]

export default async function handler(req, res) {
 
  const twiml = new VoiceResponse();

  if (req.body.SpeechResult) {

    try{
      const gather = twiml.gather({
        input: 'speech',
        timeout: 5,
        speechTimeout: 'auto'
      });

      const aliceResponse = responses[Math.floor(Math.random()*responses.length-1)]
      const prompt = prompts[Math.floor(Math.random()*prompts.length-1)] 
      gather.say({ voice: voices[Math.floor(Math.random()*voices.length-1)]  }, aliceResponse+req.body.SpeechResult+". "+prompt)
  
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
    gather.say({ voice: 'alice' }, 'Try telling me a something.');

    // Render the response as XML in reply to the webhook request
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send(twiml.toString());
  }
}