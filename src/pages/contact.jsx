import { useRouter } from "next/router"
import { UnderConstrunctionBanner } from "@/components/Banner"
import Footer from "@/components/Footer"
import ContactContent from "@/components/pages/ContactContent"
import Navbar from "@/components/Navbar"


const Contact = () =>{

  const router = useRouter()

  return (
        <div className="d-flex w-100 flex-column">
            <Navbar/>
            <ContactContent/>
            <Footer/>
            <UnderConstrunctionBanner/>


        </div>
  )
}

export default Contact