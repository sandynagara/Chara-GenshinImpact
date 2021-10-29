import React,{useState,useEffect} from "react";
import "./home.css";

const wallpaper = [{img:"https://gamestation.co.id/wp-content/uploads/2021/08/Genshin-Impact-cover.jpg",id:0},
                  {img:"https://images7.alphacoders.com/110/thumb-1920-1107308.jpg",id:1},
                  {img:"https://i.pinimg.com/originals/dc/71/ac/dc71acc551eef7efd573eb45ecee3860.jpg",id:2}]

function Home() {

  const [currentCount, setCount] = useState(1);

  useEffect(() => {
    console.log(`initializing interval`);
    const interval = setInterval(() => {
      setCount(currentCount+1)
    }, 10000);
    if(currentCount>wallpaper.length-1){
      setCount(0)
    }
    return () => {
      
      clearInterval(interval);

    };
  }, [currentCount])



  return (
    <div className="home" id="Home">
      {wallpaper.map((e)=>{
        return  <img src={e.img} key={e.id} className="logo" style={e.id===currentCount ? {position:"absolute" ,top:0,opacity:1}:{opacity:0}}/>;
      })}
      <div className="perkenalan">
        <div style={{fontSize:24}}>Hallo</div>
        <div style={{fontSize:75}}><b>Genshin Impact</b></div>
      </div>
    </div>
  );
}

export default Home;
