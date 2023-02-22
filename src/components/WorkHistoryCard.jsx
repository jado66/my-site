const WorkHistoryCard = (props) =>{
    return(
        <div className={"card col-lg-8 col-12 mx-lg-auto mx-2 "+props.className} >
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body d-flex justify-content-between">
                <h5 className="card-title"><a className="text-dark fw-bold" href = {props.workHref}>{props.company}</a> - {props.title}</h5>
                <span>{props.dates}</span>
            </div>
            <ul className="list-group list-group-flush">
                {
                    props.content.map((el,index)=>{
                        return(
                            <li key={"li-"+el.slice(0,10)} className="list-group-item ps-5">- {el}</li>
                        )
                    })
                }
            </ul>
            <div className="card-body">
                <span className="card-link">Technical Skills Used:</span>
                <span className="card-link">{props.skills}</span>
            </div>
        </div>
    )
}

export default WorkHistoryCard