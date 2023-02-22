import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { SiteContext } from "./_app"
import { UnderConstrunctionBanner } from "@/components/Banner"

const { default: Navbar } = require("@/components/Navbar")

const Page = () =>{

  const router = useRouter()
  const { userEnters } = useContext(SiteContext)


  useEffect(()=>{
    if (!userEnters){
      router.push('/construction')
    }
  })



  return (
      <div className="d-flex w-100 flex-column">
          <Navbar/>
          <UnderConstrunctionBanner/>
          <h1 className="text-center mt-3">Home</h1>
          
      </div>
  )
}

export default Page