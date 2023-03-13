const SINCH_NUMBER = '+12064743847';

export default async function handler(req, res) {

    if (!req.body) {
        throw new Error("Request body is empty");
      }

    const query = JSON.parse(req.body)




    const TO_NUMBER = query.toNumber
    const Text = query.message
    
    console.log(JSON.stringify(query))
    // console.log("TO_NUMBER: "+TO_NUMBER)
    // console.log("Text: "+Text)


    const ttsBody = {
        method: 'ttsCallout',
        ttsCallout: {
          cli: SINCH_NUMBER,
          destination: {
            type: 'number',
            endpoint: TO_NUMBER
          },
          voiceID: 'Raveena',
          prompts: `#tts[${Text}]`,
        }
      };

    var requestOptions = {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json", 
            "Authorization": process.env.SINCH_AUTH
        },
        body: JSON.stringify(ttsBody)

      };

    try {
        await fetch("https://calling.api.sinch.com/calling/v1/callouts", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        res.json({
            success:true,
            msg: `Call Placed Successfull: You should receive a call from ${SINCH_NUMBER}`
        })
    } catch (error) {
        res.json({
            success:false,
            msg: error.message
        })
    }

      
}