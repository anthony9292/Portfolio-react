import "./menu.scss";

export  default function Menu({ menuOpen, setMenuOpen })  {
    return (
        /*hyperlink for sections in topbar*/
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {/*Onclick action to close menu tap when clicking on one  of hyperlink(home,port..ex)*/}
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#work">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact Info</a>
                </li> 
            </ul>
            
        </div>
    )
}
