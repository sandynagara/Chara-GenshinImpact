import React,{useEffect,useState} from 'react'
import "./navbar.css"
import ItemNavbar from './ItemNavbar'
import { Dataitem } from './dataItem'

function Navbar() {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    }, [scrollPosition]);

    return (
        <nav>
            <div className="daftar-item" style={scrollPosition==0 ? {backgroundColor:"rgba(255,0,0,0.0)"} : {backgroundColor:"rgba(12, 28, 43, 1)"}}>
                {Dataitem.map((e,index)=>{
                    return(
                        <ItemNavbar title={e.title} key={index}/>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar
