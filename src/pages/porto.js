import React, { useState, useEffect } from "react";
import NavPorto from "../Component/itemPortfolio/navPorto";
import "./porto.css";
import ItemPorto from "../Component/itemPortfolio/itemPorto";
import { DataPorto } from "../Component/itemPortfolio/dataPorto";
import * as Io from "react-icons/io";

export default function Porto() {
  const [filter, setFilter] = useState("All");
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState(DataPorto);
  const [posisi, setPosisi] = useState(3);

  const slicingData = (data) => {
    setPosisi(3)
    console.log(posisi)
    var data2 = data.slice(0, posisi);
    setData(data2);
    console.log(data,"data")
  };

  const aturdataFilter = (data) => {
    setDataFilter(data)
    console.log(dataFilter,"data Filter")
  }

  useEffect(() => {
    var tes = []
    if(filter !== "All"){
      DataPorto.map((e)=>{
        if(e.tipe==filter){
          tes.push(e)
          console.log(tes)
        }
      })
      aturdataFilter(tes)
      slicingData(tes);
    }else{
      console.log("first")
      aturdataFilter(tes)
      slicingData(dataFilter);
    }
  }, [filter]);

  var clickHandler = (e) => {
    console.log(e);
    setFilter(e);
  };

  function clickHandlerTambah (e) {
    
    console.log(DataPorto.length,"porto");
    setPosisi(posisi+3);
    var data2 = DataPorto.slice(0, posisi+3);
    setData(data2);
  };

  return (
    <div className="porto" id="porto">
      <p style={{ color: "white", fontSize: 20 }}>
        <b>Featured Portfolio</b>
      </p>
      <NavPorto filter={clickHandler} />
      <div className="griditemPorto">
        {data.map((e) => {
          var tipe = e.tipe;
          if (filter == "All") {
            return <ItemPorto item={e} key={e.id} />;
          } else {
            return tipe == filter ? <ItemPorto item={e} key={e.id} /> : "";
          }
        })}
      </div>
      {dataFilter.length >= posisi ? (
        <div className="tambah" onClick={clickHandlerTambah}>
          <Io.IoIosArrowDropdownCircle
            style={{ width: 500 + "px", height: 50 + "px" }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
