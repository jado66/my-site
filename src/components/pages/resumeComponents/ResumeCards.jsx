import ResumeCards from "./ResumeCarousel"

const ResumeCarousel = (props) =>{
        
    return(
    <div className="h-100 col-lg-10 col-12 mx-auto pb-lg-5 pb-1">
            <h1 className="text-center text-capitalize py-4 text-light">Resume</h1>
            <div id="carouselExampleIndicators" className="carousel slide h-75 text-dark px-lg-0 px-lg-5 px-3 pb-lg-5 pb-1">
            <div className="carousel-indicators pb-lg-5">
                {
                    ResumeCards.map((el,index)=>{
                        return(
                            <div className="" key = {"carouselExampleIndicators"+index} >
                                <button type="button " 
                                    className = 'btn rounded-3 active d-flex justify-content-center pt-1'
                                    data-bs-target="#carouselExampleIndicators" 
                                    data-bs-slide-to={index}  
                                    aria-current="true" 
                                    aria-label={`Slide ${index+1}`}
                                    style={{height:"30px", width:"30px",textIndent:"0px", borderRadius:'10px'}}
                                >
                                    <span className="text-dark" >{index}</span>
                                </button>
                            </div>
                        ) 

                    })
                }
                
                
            </div>
            <div className="carousel-inner h-100 d-flex align-items-center text-dark fs-6">
                {
                   ResumeCards.map((el,index)=>{
                    return(
                        <div key = {"resume+"+index} className={"carousel-item fs-6 "+(index===0?"active":"")}>
                            {el}
                        </div>
                    )
                   }) 
                }
                
            </div>
            <button className="carousel-control-prev pe-lg-0 pe-5 pb-lg-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next ps-lg-0 ps-5 pb-lg-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
        {props.nextButton && props.nextButton}

    </div>
    
    )
}

export default ResumeCarousel