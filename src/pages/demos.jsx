import { useRouter } from "next/router"
import { UnderConstrunctionBanner } from "@/components/Banner"
import Footer from "@/components/Footer"
import DemosContent from "@/components/pages/DemosContent"
import Navbar from "@/components/Navbar"

const Demos = () =>{

  return (
        <div className="d-flex w-100 flex-column">
            <Navbar/>
            
            <DemosContent/>
                
            <Footer/>
            <UnderConstrunctionBanner/>

        </div>
  )
}

export default Demos