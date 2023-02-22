import { UnderConstrunctionBanner } from "@/components/Banner"
import { useRouter } from "next/router"

const { default: Navbar } = require("@/components/Navbar")

const About = () =>{

  const router = useRouter()

  return (
    <div className="d-flex w-100 flex-column">
        <Navbar/>
        <UnderConstrunctionBanner/>
        <h1 className="text-center mt-3 text-capitalize">{router.pathname.slice(1)}</h1>
    </div>
    )
}

export default About