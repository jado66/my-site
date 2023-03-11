import ngrok from 'ngrok';

export default async (req, res) => {
  if (req.method === 'POST') {
    let svamlResponse;
    svamlResponse = {
      instructions: [
        {
          name: 'say',
          text: 'Hi, thank you for calling your Sinch number. Congratulations! You just responded to a phone call.',
          local: 'en-US'
        }
      ],
      action: {
        name: 'hangup'
      }
    };
    res.json(svamlResponse);
  } else {
    res.statusCode = 404;
    res.end();
  }
}

(async () => {
  const url = await ngrok.connect();
  console.log(`Node.js local server is publicly-accessible at ${url}`);
  await updateUrl(url);
  console.log("Your callbackURL has been updated on your dashboard.")
})();

async function updateUrl(callbackUrl) {
  const applicationKey = process.env.SINCH_APP_KEY;
  const resp = await fetch(
    `https://callingapi.sinch.com/v1/configuration/callbacks/applications/${applicationKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.SINCH_AUTH
      },
      body: JSON.stringify({
        url: [
          {
            primary: callbackUrl
          }
        ]
      })
    }
  );

  const data = await resp.json();
  console.log(data);
}