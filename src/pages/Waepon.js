import React, { useState } from "react";
import NavWaepon from "../Component/Waepon/NavWaepon";
import "./Waepon.css";
import ItemWaepon from "../Component/Waepon/ItemWaepon";

function Waepon() {
  const [senjata, setSenjata] = useState("Claymores");

  var clickHandler = (e) => {
    setSenjata(e);
    console.log(senjata);
  };

  return (
    <div className="waepon">
      <p style={{ color: "white", fontSize: 20 }}>
        <b>Waepon</b>
      </p>
      <NavWaepon senjataTipe={clickHandler} senjata={senjata} />
      <ItemWaepon senjata={senjata}/>
    </div>
  );
}

export default Waepon;
