import React from "react";
import "./home.css";
import home from "../static/img/home.png";

function Home() {
  return (
    <div className="home">
      <img src={home} className="Logo" />;
      <div className="perkenalan">
        <div style={{fontSize:24}}>Hallo</div>
        <div style={{fontSize:75}}><b>Genshin Impact</b></div>
      </div>
    </div>
  );
}

export default Home;
