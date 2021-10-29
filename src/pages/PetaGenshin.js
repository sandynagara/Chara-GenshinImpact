import React from "react";
import Peta from "../Component/PetaGenshin/Peta";
import NavPeta from "../Component/PetaGenshin/NavPeta";
import "./petaGenshin.css";

function PetaGenshin() {
  return (
    <div className="peta" id="Peta">
     
      <p style={{ color: "white", fontSize: 20 }}>
        <b>Peta</b>
      </p>
      <NavPeta/>
      <div>
        <Peta />
      </div>
   
      
    </div>
  );
}

export default PetaGenshin;
