const SINCH_NUMBER = '+12064743847';

export default async function handler(req, res) {

    if (!req.body) {
        throw new Error("Request body is empty");
      }

    const query = JSON.parse(req.body)




    const TO_NUMBER = query.toNumber
    const Text = query.message
    const LOCALE = query.locale
    
    console.log(JSON.stringify(query))
    // console.log("TO_NUMBER: "+TO_NUMBER)
    // console.log("Text: "+Text)


    const ttsBody = {
        method: 'customCallout',
        customCallout: {
          cli: SINCH_NUMBER,
          destination: {
            type: 'number',
            endpoint: '+18012548871'
          },
          // locale:"Kevin",
          // ice: '{"instructions": [{"name": "say", "text": "Hello Message one!"}], "action": {"name": "connectPstn", "number": "+12233445566", "cli": "+12234325234"}}',
          ace: `{\"action\": {\"name\": \"RunMenu\",\"locale\": \"${LOCALE}\",\"menus\": [{\"id\": \"main\",\"mainPrompt\": \"#tts[ Welcome to the main menu. Press 1 for a callback or 2 for a cancel<\/speak>]\",\"timeoutMills\": 5000,\"options\": [ {\"dtmf\": \"1\",\"action\": \"return(callback)\"}, {\"dtmf\": \"2\",\"action\": \"return(cancel)\"}]}]}}`
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