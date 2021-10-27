import React from "react";
import Claymore from "../../static/img/Icon_Claymore.png";
import Bow from "../../static/img/Icon_Bow.png";
import Polearms from "../../static/img/Icon_Polearm.png";
import Catalysts from "../../static/img/Icon_Catalyst.png";

const itemNav = [
  {
    id: 1,
    name: "Claymores",
    img: Claymore,
  },
  {
    id: 2,
    name: "Bows",
    img: Bow,
  },
  {
    id: 3,
    name: "Catalysts",
    img: Polearms,
  },
  {
    id: 4,
    name: "Polearms",
    img: Catalysts,
  },
];

function NaVitemWaepon({ item, senjataTipe, senjata }) {
  return (
    <div
      className="backgroundNav"
      style={senjata == item.name ? {} : { borderRadius: 50 + "%" }}
    >
      <img
        className="imgNav"
        src={item.img}
        onClick={() => {
          senjataTipe(item.name);
        }}
      ></img>
    </div>
  );
}

function NavWaepon({ senjataTipe, senjata }) {
  var tes = (e) => {
    senjataTipe(e);
  };

  return (
    <div className="NavWaepon">
      {itemNav.map((e) => {
        return (
          <div>
            <NaVitemWaepon item={e} senjataTipe={tes} senjata={senjata} />
            <div
              className="penghubung"
              style={e.name !== senjata ? { height: 0 + "px" } : {}}
            />
          </div>
        );
      })}
    </div>
  );
}

export default NavWaepon;
