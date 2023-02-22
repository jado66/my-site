import { useRouter } from "next/router"
import { useContext } from "react"
import { SiteContext } from "./_app"

const { default: Navbar } = require("@/components/Navbar")

const Construction = () =>{

    const router = useRouter()

    const {setUserEnters} = useContext(SiteContext)

    const enterSite = () =>{
        setUserEnters(true)
        router.push('/')
    }

    return (
        <div className="d-flex w-100 flex-column h-100 align-content-center bg-dark">
            <div className="my-auto d-flex flex-column">
                <h1 className="text-center my-auto text-light text-uppercase">This Site Is under construction</h1>
                <button 
                    className="btn btn-lg btn-outline-light mx-auto mt-4 text-uppercase"
                    onClick={enterSite}
                >
                    Enter Anyway
                </button>
            </div>
        </div>
    )
}

export default Construction