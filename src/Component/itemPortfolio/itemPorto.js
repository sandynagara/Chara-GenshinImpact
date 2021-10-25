import React,{useState ,useEffect} from "react";
import { DataPorto } from "./dataPorto";
import ItemSelectPorto from "./itemSelectPorto";

function ItemPorto({ item }) {

  const [zoom, setZoom] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lewat, setLewat] = useState(false);

  var clickHandler =() =>{
    setZoom(!zoom)
  }

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (scrollPosition > 300 ){
        setLewat(true)
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      
  }, [scrollPosition]);

  return (
    
    <div className="itemPorto">
      <div className="gambarPorto" onClick={clickHandler} >
        <img src={item.gambar} className="gambarPorto"/>
      </div>
      <h3>{item.judul}</h3>
      <p>{item.tipe}</p>
      {zoom ? <ItemSelectPorto gambar={item.gambar} click={clickHandler}/> : ""}
    </div>
  );
}

export default ItemPorto;
