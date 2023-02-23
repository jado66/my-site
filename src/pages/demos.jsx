import { useRouter } from "next/router"
import { UnderConstrunctionBanner } from "@/components/Banner"
import Footer from "@/components/Footer"
import Link from "next/link"

const { default: Navbar } = require("@/components/Navbar")

const Demos = () =>{

  const router = useRouter()

  return (
        <div className="d-flex w-100 flex-column">
            <Navbar/>
            <UnderConstrunctionBanner/>
            <div className="container gx-lg-5 px-lg-5 px-2">
                <h1 className="text-center text-capitalize my-4">Demos and Examples</h1>
                
                <p className="text-center mb-5">Before working together it might be helpful to learn about my capabilites</p>

                <Link className="btn btn-secondary col-lg-6 col-12 mx-lg-auto mx-2 border p-4 d-flex rounded-4 border-dark text-decoration-none mb-3" href='https://jado66.github.io/reactive-site-creator-live/'>
                    <span className="text-center fs-3 flex-grow-1 fw-bold text-light">No Code Website Builder</span>
                </Link>

                {/* <Link className="btn btn-secondary col-lg-6 col-12 mx-lg-auto mx-2 border p-4 d-flex rounded-4 border-dark text-decoration-none" href='https://jado66.github.io/reactive-site-creator-live/'>
                    <span className="text-center fs-3 flex-grow-1 fw-bold text-light">No Code Website Builder</span>
                </Link> */}
            </div>
           
            
            <Footer/>
        </div>
  )
}

export default Demos