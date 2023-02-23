const WorkHistoryCard = (props) =>{
    return(
        <div className={"card col-lg-8 col-12 mx-lg-auto "+props.className} >

            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body d-flex flex-lg-row flex-column justify-content-between">
                <h5 className="card-title"><a className="text-dark fw-bold" href = {props.workHref}>{props.company}</a> - {props.title}</h5>
                <span>{props.dates}</span>
            </div>
            <ul className="list-group list-group-flush">
                {
                    props.content.map((el,index)=>{
                        return(
                            <li key={"li-"+el.slice(0,30)} className="list-group-item ps-lg-5 ps-2 text-lg-center text-start">- {el}</li>
                        )
                    })
                }
            </ul>
            <div className="card-body text-lg-center text-start">
                <span className="card-link">Technical Skills Used:</span>
                <span className="card-link">{props.skills}</span>
            </div>
        </div>
    )
}

export default WorkHistoryCard