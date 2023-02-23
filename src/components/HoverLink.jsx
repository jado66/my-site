import Link from "next/link"
import { useState } from "react"

const HoverLink = (props) =>{
    const [isHover, setHover] = useState(false)
    return(
      <Link 
        className={"nav-link fw-bold text-secondary "+(isHover || props.active?"active text-light":"")} 
        href={props.href}
        onMouseEnter = {()=>setHover(true)}
        onMouseLeave = {()=>setHover(false)}
      >
        {props.name && props.name}
        {props.children && props.children}
      </Link>
    )
  }

export default HoverLink