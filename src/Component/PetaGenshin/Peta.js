import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Anemoculus from "../../static/img/Item_Anemoculus.png";
import L from "leaflet";
import { DataMarker } from "./DataMarker";

function Peta() {
  const myIcon = new L.icon({
    iconUrl: Anemoculus,
    iconSize: [64, 64],
    iconAnchor: [32, 64],
  });

  function LocationMarker() {
    const [position, setPosition] = useState([]);
    const map = useMapEvents({
      click(e) {
        map.locate();
        console.log("click");
        var array = position.concat(e.latlng);
        setPosition(array);
        console.log(position, "array");
      },
    });

    return position.map((e, index) => {
      return (
        <Marker
          position={[e.lat, e.lng]}
          key={index}
          icon={myIcon}
          draggable={true}
        >
          <Popup> You are here </Popup>{" "}
        </Marker>
      );
    });
  }

  return (
    <div>
      <MapContainer
        center={[0, 0]}
        zoom={3}
        scrollWheelZoom={true}
        style={{
          height: "600px",
          width: "1000px",
        }}
      >
        <TileLayer
          url="./peta/{z}/{x}/{y}.png"
          minZoom="3"
          maxZoom="5"
          continuousWorld="false"
        />{" "}
        {DataMarker.map((e, index) => {
          const Icon = new L.icon({
            iconUrl: e.icon,
            iconSize: [64, 64],
            iconAnchor: [32, 64],
          });

          return (
            <Marker
              position={[e.lat, e.lng]}
              key={index}
              icon={Icon}
              draggable={true}
            >
              <Popup> You are here </Popup>
            </Marker>
          );
        })}
        <LocationMarker />
        <Marker position={[0, 0]} icon={myIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Peta;
