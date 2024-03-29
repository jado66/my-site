import Link from "next/link"

const DemosContent = (props) =>{
    return(
        <div className={"gx-lg-5 px-lg-5 text-dark "} >
            <h1 className="text-center text-capitalize py-4">Demos and Examples</h1>
            
            <p className="text-center mb-5 px">Here are some examples of my previous work</p>

            <div className="px-3">
            <Link className="btn btn-secondary col-lg-6 col-12 mx-lg-auto  border py-4 d-flex rounded-4 border-dark text-decoration-none mb-3" href='https://amybot.dev/'>
                <span className="text-center fs-3 flex-grow-1 fw-bold text-light">{"Amy (Automate Your) Communications"}</span>
            </Link>

            <Link 
                className="btn btn-warning col-lg-6 col-12 mx-lg-auto border py-4 d-flex rounded-4 border-dark text-decoration-none mb-3" 
                href='https://cabinetssouthwest.com/'
            >
                <span className="text-center fs-3 flex-grow-1 fw-bold text-dark">Single Page Website</span>
            </Link>

            <Link 
                className="btn btn-danger col-lg-6 col-12 mx-lg-auto border py-4 d-flex rounded-4 border-dark text-decoration-none mb-3" 
                href='/calling'
            >
                <span className="text-center fs-3 flex-grow-1 fw-bold ">Voice and SMS Apps</span>
            </Link>

            <Link 
                className="btn btn-success col-lg-6 col-12 mx-lg-auto border py-4 d-flex rounded-4 border-dark text-decoration-none mb-3" 
                href='https://worksite.vercel.app/tech-demos'
            >
                <span className="text-center fs-3 flex-grow-1 fw-bold text-light">Technical Demos</span>
            </Link>
            </div>
            

            
        </div>
    )
}

export default DemosContent