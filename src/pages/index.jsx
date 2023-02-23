import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { SiteContext } from "./_app"
import Footer from "@/components/Footer"
import Link from "next/link"

const { default: Navbar } = require("@/components/Navbar")

const Page = () =>{

  const router = useRouter()
  const { userEnters, setUserEnters } = useContext(SiteContext)


  useEffect(()=>{

    const entered = localStorage.getItem("entered")
    if (entered){
      setUserEnters(true)
      return
    }

    if (!userEnters){
      router.push('/construction')
    }
  })



  return (
    <div className="d-flex h-100 text-center text-bg-dark flex-column">

    
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <div>
            <h3 className="float-md-start mb-0"><Link className="nav-link fw-bold active" href=''>J-Apps</Link></h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <HoverLink href = "/demos" name ="Demos"/>
              <HoverLink href = "/resume" name ="Resume"/>
              <HoverLink href = "/contact" name ="Contact"/>            
            </nav>
          </div>
      
          <div className="flex-grow-1 d-flex flex-column">
            <div className="my-auto">
              <h1>J-Apps by JD Erwin</h1>
              <p className="lead text-capitalize mb-4">Transforming Your Vision into Custom-Built Web Solutions - Specializing in Creative Design and Development from Scratch, with Streamlined Integrations to Boost Your Online Presence and Engage Your Customers!</p>
              <p className="lead">
                <Link href="/demos" className="btn btn-lg btn-secondary text-dark fw-bold border-white bg-white">Learn more</Link>
              </p>
            </div>
            
          </div>
          
      
        <Footer small/>
      </div>
    </div>
  )
}

export default Page

const HoverLink = (props) =>{
  const [isHover, setHover] = useState(false)
  return(
    <Link 
      className={"nav-link fw-bold py-1 px-0  "+(isHover?"active text-light":"")} 
      href={props.href}
      onMouseEnter = {()=>setHover(true)}
      onMouseLeave = {()=>setHover(false)}
    >
      {props.name}
    </Link>
  )
}