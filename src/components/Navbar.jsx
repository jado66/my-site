import {List} from 'react-bootstrap-icons'
import Link from "next/link"
const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid justify-content-center">
            <button className="navbar-toggler text-warning border-0 py-2 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <List/>
            </button>
            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 border-lg-0 border-warning mt-lg-0 mt-3">
                    <li className='nav-item text-center '><Link href="/" className="nav-link px-2 text-light fw-bold">J-Apps</Link ></li>
                    <li className='nav-item text-center'><Link href="/resume" className="nav-link px-2 text-light">Resume</Link ></li>
                    <li className='nav-item text-center'><Link href="/contact" className="nav-link px-2 text-light">Contact</Link></li>
                    
                    {/* <li> className=" me-auto ">
                        <Link href="/demos" className="btn btn-outline-light me-2 mb-lg-0 mb-2">Demos</Link>
                        <Link href="/contact" className="btn btn-warning">Get Started</Link>
                    </div> */}
                </ul>
                <div className="d-flex flex-lg-row flex-column" >
                    <div className='text-center ms-lg-0 ms-3' >
                        <Link href="/demos" style={{width:"7em"}} className="btn btn-outline-light me-lg-2 mb-lg-0 mb-2  text-center">Demos</Link>
                    </div>
                    <div className='text-center ms-lg-0 ms-3'>
                        <Link href="/contact" style={{width:"7em"}} className="btn btn-warning text-center">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
        </nav>
        )
}

export default Navbar


{/* <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid flex-lg-row flex-column text-start">
                <button className="navbar-toggler text-warning border-warning py-2 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <List/>
                </button>
                <div className="collapse navbar-collapset" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li><Link href="/" className="nav-link px-2 text-light fw-bold">J-Apps</Link ></li>
                        <li><Link href="/about" className="nav-link px-2 text-light">About</Link ></li>
                        <li><Link href="/resume" className="nav-link px-2 text-light">Resume</Link ></li>
                        <li><Link href="/contact" className="nav-link px-2 text-light">Contact</Link></li>
                    </ul>
                    <div className="text-end">
                        <Link href="/demos" className="btn btn-outline-light me-2">Demos</Link>
                        <Link href="/contact" className="btn btn-warning">Get Started</Link>
                    </div>
                </div>
            </div>
        </nav>
    ) */}