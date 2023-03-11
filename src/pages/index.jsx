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
import { Fade } from "react-reveal"

const Page = () =>{

  // const demoRef = useRef()
  // const resumeRef = useRef()
  // const contactRef = useRef()

  const [step, setStep] = useState(0)
  const [backwards, setBackwards] = useState(false)
  const [showBackButton, setShowBackButton] = useState(false)

  const reverse = async() =>{
    setBackwards(true)
    setTimeout(()=>{
      setBackwards(false)
    },250)
  }


 

  const goToTop = async() =>{
    reverse()
    setStep(0)
  }

  const goBack = () => {
    reverse()
    setStep(p=>{return (p!==0?p-1:p)})
  }

  const router = useRouter()
  const { userEnters, setUserEnters } = useContext(SiteContext)

  // const scrollToDemoRef = () => {demoRef.current.scrollIntoView(); setHide(false) }
  // const scrollToResumeRef = () => resumeRef.current.scrollIntoView()    
  // const scrollToContactRef = () => contactRef.current.scrollIntoView() 

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
    <div className="d-flex h-100 text-center text-bg-dark flex-column overflow-hidden">
      
      {/* <Fade bottom = {(backwards?false:true)} top = {(backwards?true:false)}  opposite when={step === 0 } collapse> */}
        <div className="cover-container py-0 d-flex w-100 h-100 p-3 mx-auto flex-column " style={{minHeight:"100vh"}}>
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
                  <button onClick={()=>setStep(1)} className="btn btn-lg btn-secondary text-dark fw-bold border-white bg-white">Learn more</button>
                </p>
              </div>
              
            </div>
            
        
          <Footer small/>
        </div>
      {/* </Fade> */}
      {/* <Fade bottom = {(backwards?false:true)} top = {(backwards?true:false)} opposite when={step === 1} collapse> */}
        <div className="mb-5 bg-light" style={{minHeight:"100vh"}}>
        

          <DemosContent/>
          <button onClick={()=>setStep(2)} className="btn btn-lg btn-secondary text-dark fw-bold border-dark bg-white">What Is Next</button>
          
        </div>
      {/* </Fade> */}

      {/* <Fade bottom = {(backwards?false:true)} top = {(backwards?true:false)} opposite when={step === 2} collapse> */}
        <div className="mb-5 bg-secondary" style={{minHeight:"100vh"}}>
          <ResumeCarousel 
            nextButton = {<button onClick={()=>setStep(3)} className="btn btn-lg btn-secondary text-dark fw-bold border-dark bg-white">Learn more</button>}
          />
          
        </div>
      {/* </Fade> */}

      {/* <Fade bottom = {(backwards?false:true)} top = {(backwards?true:false)} opposite when={step === 3} collapse> */}

        <div className="bg-light" style={{minHeight:"100vh"}}>
          <ContactContent
            backButton = {<button onClick={goToTop} className="btn btn-lg btn-secondary text-dark fw-bold border-dark bg-white mt-3">Back to top</button>}
          />
          

          {/* <button onClick={scrollToContactRef} className="btn btn-lg btn-secondary text-dark fw-bold border-dark bg-white">Learn more</button> */}
        </div>
      {/* </Fade> */}

      
      <div className="position-absolute w-100 py-2"
        onMouseEnter={()=>setShowBackButton(true)}
        onMouseLeave={()=>setShowBackButton(false)}

      >
        {/* <Fade top opposite when = {showBackButton && step !== 0} collapse> */}
          <button 
            className="mx-auto btn btn-dark"
            onClick={goBack}  
          >
            Go Back
          </button>
        {/* </Fade> */}
        
        
      </div>
    </div>
  )
}

export default Page

