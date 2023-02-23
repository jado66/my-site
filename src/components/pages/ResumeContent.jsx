import ResumeCards from "./resumeComponents/ResumeCarousel";

const ResumeContent = (props) =>{
    
    const scrollToTopRef = () => window.scrollTo(0, 0);   
    return(
        <div className={" gx-lg-5 px-lg-5 text-dark "+(props.mainPage?" bg-secondary":"")}>
            <h1 className="text-center text-capitalize py-4">Resume</h1>

            <div 
                className={"overflow-auto "} 
                
                style = {{height:"65%"}}
            >
                {ResumeCards}                
                
                <div className="w-100 d-flex">
                <button onClick={scrollToTopRef} className="btn btn-dark mt-4 mx-auto">Back To Top</button>

                </div>
            </div>



        </div>
            
    )
}

export default ResumeContent