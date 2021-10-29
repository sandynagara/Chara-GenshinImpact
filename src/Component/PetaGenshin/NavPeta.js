import React from "react";
import Anemoculus from "../../static/img/Item_Anemoculus.png";
import Electroculus from "../../static/img/Item_Electroculus.png";
import Geoculus from "../../static/img/Item_Anemoculus.png";

const DataNavPeta = [
  { id: 1, img: Anemoculus },
  { id: 2, img: Electroculus },
  { id: 3, img: Geoculus },
];

function NavPeta() {
  return <div>
      {DataNavPeta.map((e)=>{
          <div>
              <img src={e.img} className="NavImg"/>
          </div>
      })}
  </div>;
}

export default NavPeta;
