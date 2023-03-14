import Link from "next/link"

const ContactContent = (props) =>{
    return(
        <div className="d-block  px-3 text-dark pt-2" >
            <h1 className="text-center text-capitalize my-4">Contact Me</h1>
            

            <div className="container p-4 border rounded-4 text-start">
            <p className="text-center ">Fill out this form to send a message directly to my inbox</p>

                <form id="contactForm">

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input className="form-control" id="name" type="text" placeholder="John Doe" data-sb-validations="required" />
                        <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
                    </div>

                
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input className="form-control" id="emailAddress" type="email" placeholder="JohnDoe@email.com" data-sb-validations="required, email" />
                        <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                        <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                    </div>

                
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" id="message" type="text" placeholder="I have a question about..." style={{height: "6rem"}} data-sb-validations="required"></textarea>
                        <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
                    </div>

                
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">Form submission successful!</div>
                    </div>

                
                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error sending message!</div>
                    </div>

                
                    <div className="d-grid col-lg-6 col-8 mx-auto">
                        <button className="btn btn-success btn-lg" type="submit">Submit</button>
                    </div>

                </form>

            </div>

            
            {props.backButton && props.backButton}

           
        </div>
    )
}

export default ContactContent