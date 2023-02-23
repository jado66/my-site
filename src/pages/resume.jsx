import { UnderConstrunctionBanner } from "@/components/Banner"
import Footer from "@/components/Footer"
import ResumeContent from "@/components/pages/ResumeContent"

const { default: Navbar } = require("@/components/Navbar")

const Resume = () =>{

  return (
        <div className="d-flex w-100 flex-column">
            <Navbar/>
            {/* <UnderConstrunctionBanner/> */}
            
            <ResumeContent/>

            <Footer/>
            <UnderConstrunctionBanner/>

        </div>
  )
}

export default Resume