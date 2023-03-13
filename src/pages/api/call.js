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
        instructions: [
            {
              name: 'sendDtmf',
              value: '1234#'
            }
          ],
          action: {
            name: 'park',
            introPrompt: '#tts[Welcome]',
            holdPrompt: '#tts[Please wait, you are on hold]',
            maxDuration: 180
          }
      };

    var requestOptions = {
        method: 'PATCH',
        headers: { 
            "Content-Type": "application/json", 
            "Authorization": process.env.SINCH_AUTH
        },
        body: JSON.stringify(ttsBody)

      };

    try {
        await fetch(`https://calling.api.sinch.com/calling/v1/calls/id/${callid}`, requestOptions)
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