const Footer = (props) =>{
    return(
        <footer className={"text-muted text-center text-small "+(props.small?"my-2 pt-2 ":"my-5 pt-5 ")}>
            <p className="mb-1">© 2023 J-Apps</p>
            <ul className="list-inline">
           
            </ul>
        </footer>
    )
}

export default Footer