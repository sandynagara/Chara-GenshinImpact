import React from "react";

function itemSelectPorto({ gambar ,click}) {
  return (
    <div className="selectItem" onClick={click}>
      <img src={gambar} />
    </div>
  );
}

export default itemSelectPorto;
