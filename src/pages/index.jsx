import { useRouter } from "next/router"
import { useContext, useEffect, useRef, useState } from "react"
import { SiteContext } from "./_app"
import Footer from "@/components/Footer"
import Link from "next/link"
import HoverLink from "@/components/HoverLink"
import DemosContent from "@/components/pages/DemosContent"
import ResumeContent from "@/components/pages/ResumeContent"
import ContactContent from "@/components/pages/ContactContent"
import ResumeCarousel from "@/components/pages/resumeComponents/ResumeCards"

const Page = () =>{

  const demoRef = useRef()
  const resumeRef = useRef()
  const contactRef = useRef()

  const router = useRouter()
  const { userEnters, setUserEnters } = useContext(SiteContext)

  const scrollToDemoRef = () => demoRef.current.scrollIntoView()    
  const scrollToResumeRef = () => resumeRef.current.scrollIntoView()    
  const scrollToContactRef = () => contactRef.current.scrollIntoView() 

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

    
      <div className="cover-container py-0 d-flex w-100 h-100 p-3 mx-auto flex-column" style={{minHeight:"100vh"}}>
          <div>
            <h3 className="float-md-start mb-0 pt-4"><Link className="nav-link fw-bold active" href=''>J-Apps</Link></h3>
            <nav className="nav nav-masthead justify-content-center float-md-end pt-4">
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
                <button onClick={scrollToDemoRef} className="btn btn-lg btn-secondary text-dark fw-bold border-white bg-white">Learn more</button>
              </p>
            </div>
            
          </div>
          
      
        <Footer small/>
      </div>

      <div className="mb-5" style={{minHeight:"100vh"}} ref={demoRef}>
        <DemosContent/>
        <button onClick={scrollToResumeRef} className="btn btn-lg btn-secondary text-dark fw-bold border-dark bg-white">Learn more</button>

      </div>
      <div className="mb-5 bg-secondary" ref = {resumeRef} style={{minHeight:"100vh"}}>
        <ResumeCarousel 
          nextButton = {<button onClick={scrollToContactRef} className="btn btn-lg btn-secondary text-dark fw-bold border-dark bg-white">Learn more</button>}
        />
        
      </div>
      <div style={{minHeight:"100vh"}} ref = {contactRef}>
        <ContactContent mainPage/>
        {/* <button onClick={scrollToContactRef} className="btn btn-lg btn-secondary text-dark fw-bold border-dark bg-white">Learn more</button> */}
      </div>
    </div>
  )
}

export default Page

