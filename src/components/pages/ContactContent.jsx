import Link from "next/link"

const ContactContent = () =>{
    return(
        <div className="d-block gx-lg-5 px-lg-5 text-dark" >
            <h1 className="text-center text-capitalize my-4">Contact Me</h1>
            
            <p className="text-center mb-5">Here is how you can contact me</p>

            <div className="border border-dark rounded-3 mx-lg-auto col-lg-8 col-12 mx-2 py-5 text-center" style={{height:"15em"}}>
                Here will be a form to send me an email
            </div> 
           

           
        </div>
    )
}

export default ContactContent