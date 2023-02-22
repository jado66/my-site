import Link from "next/link"
const Navbar = () =>{
    return(
        <header className="p-3 text-bg-dark flex-grow-1">
        <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {/* <Link href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            </Link > */}

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link href="/" className="nav-link px-2 text-white fw-bold">J-Apps</Link ></li>
                <li><Link href="/about" className="nav-link px-2 text-white">About</Link ></li>
                <li><Link href="/resume" className="nav-link px-2 text-white">Resume</Link ></li>
                <li><Link href="/contact" className="nav-link px-2 text-white">Contact</Link></li>

            </ul>           

            <div className="text-end">
                <Link href="/demos" className="btn btn-outline-light me-2">Demos</Link>
                <Link href="/contact" className="btn btn-warning">Get Started</Link>
            </div>
        </div>
        </div>
    </header>
    )
}

export default Navbar