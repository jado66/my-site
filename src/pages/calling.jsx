import { useState } from "react"
import { toast } from "react-toastify"


const API_ENDPOINT = process.env.NODE_ENV === 'production'
  ? 'https://www.japps.dev/api/callTwilio'
  : 'http://localhost:3000/api/callTwilio';

const Calling = () =>{

    const [toNumber, setToNumber] = useState('+18012548871')
    const [message, setMessage] = useState('Hello this is your application.')
    const [locale, setLocale] = useState('Salli')


    const makeCall = async() => {
        try {
            let response = await fetch(API_ENDPOINT, {
                method: "POST",
                body: JSON.stringify({
                    toNumber: toNumber,
                    message: message,
                    locale:locale
                }),
            });
            response = await response.json();
            response.success?toast.success(response.msg):toast.error(response.msg)
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <div className="d-flex w-100 flex-column h-100 align-content-center bg-secondary container pt-5">
            
            <div className="p-5 d-flex flex-column border mx-5 rounded-3 bg-light">
                <h2 className="text-center ">Call Yourself</h2>
                <hr className=" mt-4"/>

                <div className="mb-3">
                    <label className="form-label">Voice</label>
                    <select className="form-control" value={locale} onChange = {(e)=>setLocale(e.target.value)}>
                        <option value = "Nicole">Nicole - Female - Australian</option>
                        <option value = "Olivia">Olivia - Female - Australian</option>
                        <option value = "Russell">Russell - Male - Australian</option>
                        <option value = "Amy">Amy - Female - British</option>
                        <option value = "Emma">Emma - Female - British</option>
                        <option value = "Brian">Brian - Male - British</option>
                        <option value = "Arthur">Arthur - Male - British</option>
                        <option value = "Aditi">Aditi - Female - Indian</option>
                        <option value = "Raveena">Raveena - Female - Indian</option>
                        <option value = "Kajal">Kajal - Female - Indian</option>
                        <option value = "Aria">Aria - Female - New Zealand</option>
                        <option value = "Ayanda">Ayanda - Female - South Africa</option>
                        <option value = "Ivy">Ivy - Female (child) - US</option>
                        <option value = "Joanna">Joanna - Female - US</option>
                        <option value = "Kendra">Kendra - Female - US</option>
                        <option value = "Kimberly">Kimberly - Female - US</option>
                        <option value = "Salli">Salli - Female - US</option>
                        <option value = "Joey">Joey - Male - US</option>
                        <option value = "Justin">Justin - Male (child) - US</option>
                        <option value = "Kevin">Kevin - Male (child) - US</option>
                        <option value = "Matthew">Matthew - Male - US</option>
                        <option value = "Geraint">Geraint - Male - Welsh</option>
                    </select>
                </div>


                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-control" value={toNumber} onChange = {(e)=>setToNumber(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setMessage(e.target.value)} value = {message} />
                </div>
                <button className="btn btn-primary mx-auto btn-lg px-5" onClick={makeCall}>Start Call</button>

            </div>

           
            
        </div>
    )
}

export default Calling