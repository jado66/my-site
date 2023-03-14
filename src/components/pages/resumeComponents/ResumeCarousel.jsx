import { useState } from "react"
import ResumeCards from "./ResumeCards"
import Fade from "react-reveal"
const ResumeCarousel = (props) =>{
        
    const [step, setStep] = useState(0)
    const [show,setShow] = useState(true)
    const [backwards, setBackwards] = useState(false)
    const [stepCount, setStepCount] = useState(ResumeCards.length)

    const goBack = async() => {
        setBackwards(true)
        setShow(false)

        setTimeout(()=>{
            setShow(true)
            setStep(p=>{return (p!==0?p-1:stepCount-1)})

            setBackwards(false)
        },700)
        
    } 
    const goNext = async() => {
        
        setShow(false)
        setTimeout(()=>{
            setStep(p=>{return (p!==stepCount-1?p+1:0)})
            setShow(true)

          },700)
    } 

    return(

    <div className="h-100 col-lg-10 col-12 mx-auto pb-lg-5 pb-1 position-relative"  style={{minHeight:"100vh"}}>
            <h1 className="text-center text-capitalize py-4 text-light">Resume</h1>
                
           
            
            <div className="flex-row h-100 align-items-center text-dark fs-6" style={{minHeight:'300px'}}>
                {
                   ResumeCards.map((el,index)=>{
                    return(
                        <Fade key = {"fade+"+index} left = {(backwards?false:true)} right = {(backwards?true:false)} when = {index === step && show} opposite  collapse > 
                            <div key = {"resume+"+index} className={"fs-6 px-lg-5 px-3 "}>
                                {el}
                            </div>
                        </Fade>
                    )
                   }) 
                }
            </div>

            <div className="mt-3 position-fixed w-100" style={{bottom:"20%"}}>
                <div className="mb-4">
                    <button className="btn btn-light btn-outline-dark" type="button" onClick={goBack}>
                        Back
                    </button>
                    <button className="btn btn-light btn-outline-dark" type="button" onClick={goNext}>
                        Next
                    </button>
                </div>
               

                {props.nextButton && props.nextButton}

            </div>
            


    </div>
    
    )
}

export default ResumeCarousel