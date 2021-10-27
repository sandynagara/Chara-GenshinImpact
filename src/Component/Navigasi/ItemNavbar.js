import React, { useState } from "react";
import { Link } from "react-scroll";

export default function ItemNavbar({ title }) {
  const [underline, setUnderline] = useState(false);

  var hoverHandler = () => {
    console.log(underline);
    setUnderline(!underline);
  };

  return (
    <Link
      activeClass="active"
      to={title}
      spy={true}
      smooth={true}
      duration={500}
      style={({ marginLeft: 15 + "px" }, { marginRight: 15 + "px" })}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
      <p>
        <b>{title}</b>
      </p>

      <div
        className="underline"
        style={underline ? { width: 100 + "%" } : { width: 0 + "px" }}
      />
    </Link>
  );
}
