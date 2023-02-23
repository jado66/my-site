import ResumeCards from "./ResumeCarousel"

const ResumeCarousel = (props) =>{
        
    return(
    <div className="h-100">
            <h1 className="text-center text-capitalize py-4 text-dark">Resume</h1>
            <div id="carouselExampleIndicators" className="carousel slide h-75 text-dark">
            <div className="carousel-indicators">
                {
                    ResumeCards.map((el,index)=>{
                        return(
                            <button key = {"carouselExampleIndicators"+index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className="active " aria-current="true" aria-label={`Slide ${index+1}`}></button>
                        ) 

                    })
                }
                
                
            </div>
            <div className="carousel-inner text-dark">
                {
                   ResumeCards.map((el,index)=>{
                    return(
                        <div key = {"resume+"+index} className={"carousel-item "+(index===0?"active":"")}>
                            {el}
                        </div>
                    )
                   }) 
                }
                
            </div>
            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
        {props.nextButton && props.nextButton}

    </div>
    
    )
}

export default ResumeCarousel