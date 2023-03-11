import '@/styles/globals.css'
import { createContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
export const SiteContext = createContext()
 

export default function App({ Component, pageProps }) {
  
  const [userEnters, setUserEnters] = useState(false)

  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    

  },[])
  return (
    <SiteContext.Provider value =
      {{
        userEnters: userEnters,
        setUserEnters:setUserEnters
      }}
    >
      <ToastContainer/>
      <Component {...pageProps} />
    </SiteContext.Provider>
    )

}
