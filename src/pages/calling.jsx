import Link from "next/link";
import { useState } from "react"
import { toast } from "react-toastify"


const CALL_ENDPOINT = process.env.NODE_ENV === 'production'
  ? 'https://www.japps.dev/api/voice-outgoing'
  : 'http://localhost:3000/api/voice-outgoing';

const SMS_ENDPOINT = process.env.NODE_ENV === 'production'
  ? 'https://www.japps.dev/api/sms-outgoing'
  : 'http://localhost:3000/api/sms-outgoing';

const OTP_ENDPOINT = process.env.NODE_ENV === 'production'
  ? 'https://www.japps.dev/api/text-otp'
  : 'http://localhost:3000/api/text-otp';

const Calling = () =>{

   

    const [app, setApp] = useState('voice')

    
    return (
        <div className="d-flex w-100 flex-column h-100 align-content-center bg-secondary pt-3 ">
            
           
            <div className="col-lg-8 col-12 mx-auto px-3">
                <div className="p-4 d-flex flex-column border mx-lg-5 rounded-3 bg-light  mx-0">
                <div className="text-center">
                    {/* <h2>Call Yourself</h2> */}
                        <div className="btn-group" role="group">
                            <button type="button" className={"btn h2 px-4 "+(app === 'voice'?"btn-secondary":"btn-outline-secondary")} onClick={() => setApp('voice')}>
                                <h2>Voice Apps</h2>
                            </button>
                            <button type="button" className={"btn h2 px-4 "+(app === 'sms'?"btn-secondary":"btn-outline-secondary")} onClick={() => setApp('sms')}>
                                <h2>SMS Apps</h2>
                            </button>
                        </div>
                    </div>


                    <hr className=" mt-4"/>

                    {
                        app === 'voice' ? <VoiceApp/> : <SMSApp/>
                    }

                    {/* <div className="mb-3">
                        <label className="form-label">Voice</label>
                        <select className="form-control" value={voice} onChange = {(e)=>setVoice(e.target.value)}>
                            <optgroup label = "English (Australian)">
                                <option value = "Polly.Nicole">Nicole</option>
                                <option value = "Polly.Russell">Russell</option>
                                <option value = "Polly.Olivia-Neural">Olivia-Neural</option>
                            </optgroup>
                            <optgroup label = "English (British)">
                                <option value = "Polly.Amy">Amy</option>
                                <option value = "Polly.Brian">Brian</option>
                                <option value = "Polly.Emma">Emma</option>
                                <option value = "Polly.Amy-Neural">Amy-Neural</option>
                                <option value = "Polly.Emma-Neural">Emma-Neural</option>
                                <option value = "Polly.Brian-Neural">Brian-Neural</option>
                                <option value = "Polly.Arthur-Neural">Arthur-Neural</option>
                            </optgroup>
                                <optgroup label = "English (Indian)">
                                <option value = "Polly.Aditi">Aditi	</option>
                                <option value = "Polly.Raveena">Raveena</option>
                                <option value = "Polly.Kajal-Neural">Kajal-Neural</option>
                            </optgroup>
                            <optgroup label = "English (New Zealand)">
                                <option value = "Polly.Aria-Neural">Aria-Neural</option>
                            </optgroup>
                            <optgroup label = "English (US)">
                                <option value = "Polly.Ivy">Ivy</option>
                                <option value = "Polly.Joanna">Joanna</option>
                                <option value = "Polly.Joey">Joey</option>
                                <option value = "Polly.Justin">Justin</option>
                                <option value = "Polly.Kendra">Kendra</option>
                                <option value = "Polly.Kimberly">Kimberly</option>
                                <option value = "Polly.Matthew">Matthew</option>
                                <option value = "Polly.Salli">Salli</option>
                                <option value = "Polly.Ivy-Neural">Ivy-Neural</option>
                                <option value = "Polly.Joanna-Neural">Joanna-Neural</option>
                                <option value = "Polly.Kendra-Neural">Kendra-Neural</option>
                                <option value = "Polly.Kevin-Neural">Kevin-Neural (child)</option>
                                <option value = "Polly.Kimberly-Neural">Kimberly-Neural</option>
                                <option value = "Polly.Salli-Neural">Salli-Neural</option>
                                <option value = "Polly.Joey-Neural">Joey-Neural</option>
                                <option value = "Polly.Justin-Neural">Justin-Neural</option>
                                <option value = "Polly.Matthew-Neural*">Matthew-Neural</option>
                            </optgroup>
                            <optgroup label = "English (South African)">
                                <option value = "Polly.Ayanda-Neural">Ayanda-Neural</option>
                            </optgroup>
                            <optgroup label = "English (Welsh)">
                                <option value = "Polly.Geraint">Geraint</option>
                            </optgroup>
                        </select>
                    </div> */}


                </div>
            </div>
            

           
            
        </div>
    )
}

export default Calling

const SMSApp = () => {

    const [toNumber, setToNumber] = useState('+18012548871')
    const [message, setMessage] = useState('Hello this is your application.')
    const [voice, setVoice] = useState('Salli')

    const [code, setCode] = useState("")
    const [showModal, setShowModal] = useState(false)

    const debug = false //process.env.NODE_ENV !== 'production'

    const triggerOTP = async() =>{

        if (debug){
            sendText()
            return
        }

        setShowModal(true)
        try {
            let response = await fetch(OTP_ENDPOINT, {
                method: "POST",
                body: JSON.stringify({
                    toNumber: toNumber
                }),
            });
            response = await response.json();
            response.success?toast.success(response.msg):toast.error(response.msg)
            setSID(response.sid)
           
        } catch (error) {
            console.log(error);
            toast.error(error)
            // setShowModal(false)

        }
    }

    const sendText = async() => {
        setShowModal(false)
        try {
            let response = await fetch(SMS_ENDPOINT, {
                method: "POST",
                body: JSON.stringify({
                    toNumber: toNumber,
                    message: message,
                    code:code
                }),
            });
            response = await response.json();
            response.success?toast.success(response.msg):toast.error(response.msg)
        } catch (error) {
            console.log(error);
        }
        setCode("")

    }
    
    const handleClose = () =>{
        setShowModal(false)
    }


    return(
        <div>
             <div className={`modal fade px-lg-5 px-2 mt-lg-5 mt-2 col-10 ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">A OTP Was Sent to {toNumber}</h5>
                            <button type="button" className="close btn" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="text-start ms-2">Please enter the OPT below.</p>
                            <input className="form-control" type="number" value = {code} onChange = {(e)=>{setCode(e.target.value)}}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={sendText}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && <div className="modal-backdrop fade show"></div>}


            <h3 className = "mb-3 text-center">Text Yourself</h3>

            <div className = "px-4 text-center">
                <div className="mb-3 text-start">
                    <label className="form-label ">Phone Number</label>
                    <input type="text" className="form-control" value={toNumber} onChange = {(e)=>setToNumber(e.target.value)}/>
                </div>
                <div className="mb-3 text-start">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setMessage(e.target.value)} value = {message} />
                </div>
                <button className="btn btn-primary mx-auto btn-lg px-5" onClick={triggerOTP}>Send Text</button>

            </div>

            <hr className="my-4"/>

            <h3 className = "mb-4 text-center">Text The Website Assistant</h3>
            <div className = "px-4 text-center">

                <Link href = "sms: +1-888-598-7351" className = "mx-auto ">
                    <button className="btn btn-primary mx-auto btn-lg px-5 fs-6">Text +1-888-598-7351</button>
                </Link>
            </div>

        </div>
    )
}


const VoiceApp = () => {

    const [toNumber, setToNumber] = useState('+18012548871')
    const [message, setMessage] = useState('Hello this is your application.')
    const [voice, setVoice] = useState('Salli')

    const [code, setCode] = useState("")
    const [showModal, setShowModal] = useState(false)

    const debug = false //process.env.NODE_ENV !== 'production'

    const triggerOTP = async() =>{

        if (debug){
            makeCall()
            return
        }

        setShowModal(true)
        try {
            let response = await fetch(OTP_ENDPOINT, {
                method: "POST",
                body: JSON.stringify({
                    toNumber: toNumber
                }),
            });
            response = await response.json();
            response.success?toast.success(response.msg):toast.error(response.msg)
            setSID(response.sid)
           
        } catch (error) {
            console.log(error);
            toast.error(error)
            // setShowModal(false)

        }
    }

    const makeCall = async() => {
        setShowModal(false)
        try {
            let response = await fetch(CALL_ENDPOINT, {
                method: "POST",
                body: JSON.stringify({
                    toNumber: toNumber,
                    message: message,
                    voice:voice,
                    code:code
                }),
            });
            response = await response.json();
            response.success?toast.success(response.msg):toast.error(response.msg)
        } catch (error) {
            console.log(error);
        }
        setCode("")

    }
    
    const handleClose = () =>{
        setShowModal(false)
    }


    return(
        <div>
             <div className={`modal fade px-lg-5 px-2 mt-lg-5 mt-2 col-10 ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">A OTP Was Sent to {toNumber}</h5>
                            <button type="button" className="close btn" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="text-start ms-2">Please enter the OPT below.</p>
                            <input className="form-control" type="number" value = {code} onChange = {(e)=>{setCode(e.target.value)}}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={makeCall}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && <div className="modal-backdrop fade show"></div>}


            <h3 className = "mb-3 text-center">Call Yourself</h3>

            <div className = "px-4 text-center">
                <div className="mb-3 text-start">
                    <label className="form-label ">Phone Number</label>
                    <input type="text" className="form-control" value={toNumber} onChange = {(e)=>setToNumber(e.target.value)}/>
                </div>
                <div className="mb-3 text-start">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setMessage(e.target.value)} value = {message} />
                </div>
                <button className="btn btn-primary mx-auto btn-lg px-5" onClick={triggerOTP}>Send Call</button>

            </div>

            <hr className="my-4"/>

            <h3 className = "mb-4 text-center">Call The Website Assistant</h3>
            <div className = "px-4 text-center">

                <Link href = "tel: +1-888-598-7351" className = "mx-auto ">
                    <button className="btn btn-primary mx-auto btn-lg px-5 fs-6">Call +1-888-598-7351</button>
                </Link>
            </div>

        </div>
    )
}
