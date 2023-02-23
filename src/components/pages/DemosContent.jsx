import Link from "next/link"

const DemosContent = (props) =>{
    return(
        <div className={"gx-lg-5 px-lg-5 text-dark "} >
            <h1 className="text-center text-capitalize py-4">Demos and Examples</h1>
            
            <p className="text-center mb-5 px">Here are some examples of my previous work</p>

            <div className="px-3">
            <Link className="btn btn-secondary col-lg-6 col-12 mx-lg-auto  border py-4 d-flex rounded-4 border-dark text-decoration-none mb-3" href='https://jado66.github.io/reactive-site-creator-live/'>
                <span className="text-center fs-3 flex-grow-1 fw-bold text-light">Code-Free Website Builder</span>
            </Link>

            <Link 
                className="btn btn-warning col-lg-6 col-12 mx-lg-auto border py-4 d-flex rounded-4 border-dark text-decoration-none mb-3" 
                href='https://cabinets-southwest.vercel.app/'
            >
                <span className="text-center fs-3 flex-grow-1 fw-bold text-dark">SPA - Small Business Example</span>
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