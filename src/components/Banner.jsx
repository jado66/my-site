import { ConeStriped } from "react-bootstrap-icons"

export const Banner = (props) =>{
    return(
        <div className="bg-warning p-3 text-center border-bottom border-top border-dark">
            <span className="mx-auto text-capitalize fw-bold fs-5"><ConeStriped className="text-dark me-3 fs-4"/>{props.message}<ConeStriped className="text-dark ms-3 fs-4"/></span>
        </div>
    )
}

export const UnderConstrunctionBanner = () => <Banner message = " This page is actively being worked on"/>