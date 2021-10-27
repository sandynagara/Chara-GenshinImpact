import React, { useState, useEffect } from "react";
import NavPorto from "../Component/itemPortfolio/navPorto";
import "./porto.css";
import ItemPorto from "../Component/itemPortfolio/itemPorto";
import { DataPorto } from "../Component/itemPortfolio/dataPorto";
import * as Io from "react-icons/io";

export default function Porto() {
  const [filter, setFilter] = useState("All");
  const [data, setData] = useState(DataPorto);
  const [dataFilter, setDataFilter] = useState(DataPorto);
  const [posisi, setPosisi] = useState(3);

  const slicingData = (data) => {
    var data2 = data.slice(0, 3);
    setData(data2);
    console.log(data,"data")
  };

  const aturdataFilter = (data) => {
    setDataFilter(data)
    console.log(dataFilter,"data Filter")
  }

  useEffect(() => {
    setPosisi(3)
    if(filter !== "All"){
      var tes = []
      DataPorto.map((e)=>{
        if(e.tipe==filter){
          tes.push(e)
        }
      })
      aturdataFilter(tes)
      slicingData(tes);
    }else{
      console.log("first")
      aturdataFilter(DataPorto)
      slicingData(DataPorto);
    }
  }, [filter]);

  var clickHandler = (e) => {
    console.log(e);
    setFilter(e);
  };

  useEffect(()=>{
    if(posisi!==3){
      console.log(posisi) 
      var data2 = dataFilter.slice(0, posisi);
      setData(data2);
    }
  },[posisi])

  return (
    <div className="porto" id="porto">
      <p style={{ color: "white", fontSize: 20 }}>
        <b>Character</b>
      </p>
      <NavPorto filter={clickHandler} cek={filter}/>
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
        <div className="tambah" onClick={()=>{setPosisi(posisi+3)}}>
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
