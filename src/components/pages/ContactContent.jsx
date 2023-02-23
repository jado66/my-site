import Link from "next/link"

const ContactContent = () =>{
    return(
        <div className="d-block gx-lg-5 px-lg-5 text-dark" >
            <h1 className="text-center text-capitalize my-4">Contact Me</h1>
            
            <p className="text-center mb-5">Before working together it might be helpful to learn about my capabilites</p>

            <div className="border border-dark rounded-3 mx-lg-auto col-lg-8 col-12 mx-2 py-5" style={{height:"10em"}}>
                Here will be a form to send me an email
            </div> 
           

           
        </div>
    )
}

export default ContactContent