import Link from "next/link"

const DemosContent = (props) =>{
    return(
        <div className={"gx-lg-5 px-lg-5 text-dark "} >
            <h1 className="text-center text-capitalize py-4">Demos and Examples</h1>
            
            <p className="text-center mb-5 px">Before working together it might be helpful to learn about my capabilites</p>

            <div className="px-3">
            <Link className="btn btn-secondary col-lg-6 col-12 mx-lg-auto  border py-4 d-flex rounded-4 border-dark text-decoration-none mb-3" href='https://jado66.github.io/reactive-site-creator-live/'>
                <span className="text-center fs-3 flex-grow-1 fw-bold text-light">No Code Website Builder</span>
            </Link>

            <Link className="btn btn-secondary col-lg-6 col-12 mx-lg-auto border py-4 d-flex rounded-4 border-dark text-decoration-none mb-3" href='#'>
                <span className="text-center fs-3 flex-grow-1 fw-bold text-light">Place Holder For Another Project</span>
            </Link>

            <Link className="btn btn-secondary col-lg-6 col-12 mx-lg-auto border py-4 d-flex rounded-4 border-dark text-decoration-none mb-3" href='#'>
                <span className="text-center fs-3 flex-grow-1 fw-bold text-light">Place Holder For Another Project</span>
            </Link>
            </div>
            

            
        </div>
    )
}

export default DemosContent