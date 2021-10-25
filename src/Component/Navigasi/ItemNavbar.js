import React ,{useState}from 'react'
import {Link} from 'react-scroll'

export default function ItemNavbar({title}) {

    

    const [underline, setUnderline] = useState(false)
    
    var hoverHandler =() =>{
        console.log(underline,)
        setUnderline(!underline)
    }

    var scrollHandling = () => {
        window.scrollTo(10, 600)
    }

    return (
        <div style={{marginLeft: 15 + "px" },{marginRight: 15 + "px" }} onMouseEnter={hoverHandler} onMouseLeave={hoverHandler} onClick={scrollHandling}>
            <p><b>{title}</b></p>
            <Link activeClass="active" to="porto" spy={true} smooth={true}>
                <div className="underline" style={underline ? {width:100+"%"}:{width:0+"px"}}/>
            </Link>
            
        </div>
    )
}
