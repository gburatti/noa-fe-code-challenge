import React, { useContext } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import Loading from "assets/loader.svg";

import { AppContext } from "../App/App.context";
import MapChangeView from "components/MapChangeView";
import { latLngBounds } from "leaflet";
import { parseStrToLocation, getDistanceFromLatLonInKm } from "./utils";

import style from "./Map.module.css";

function Map() {
  const { browserLocation, ipInfo } = useContext(AppContext);

  const loading = browserLocation.loading || ipInfo.loading;
  const ipLatLong = parseStrToLocation(ipInfo.data?.loc);
  const browserLatLong = browserLocation.data;

  let bounds,
    center: [number, number] = [0, 0],
    content = [];

  if (loading) {
    content.push(
      <div className={style.loading} key="loading">
        <img src={Loading} alt="loading" />
      </div>
    );
  } else {
    if (!ipLatLong && !browserLatLong) {
      content.push(
        <div className={style.error} key="error">
          <p>No locations to show, see stats for more details.</p>
        </div>
      );
    } else {
      if (ipLatLong) {
        content.push(
          <Marker position={ipLatLong} key="ipmarker">
            <Popup>
              Your IP: {ipInfo.data?.ip}
              <br />
              Location: {ipInfo.data?.loc}
            </Popup>
          </Marker>
        );
      }

      if (browserLatLong) {
        content.push(
          <Marker position={browserLatLong} key="browsermarker">
            <Popup>
              Your Browser Loaction
              <br />
              Location: {browserLatLong}
            </Popup>
          </Marker>
        );
      }

      // if have both postions use bound to position map view and add distance line
      // else just center a map on available pin
      if (ipLatLong && browserLatLong) {
        bounds = latLngBounds([ipLatLong, browserLatLong]);
        content.push(
          <Polyline
            pathOptions={{ color: "black" }}
            positions={[ipLatLong, browserLatLong]}
            key="polyline"
          >
            <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
              Distance{" "}
              {getDistanceFromLatLonInKm(...ipLatLong, ...browserLatLong)}
            </Tooltip>
          </Polyline>
        );
      } else {
        center = ipLatLong || browserLatLong || [0, 0];
      }
    }
  }

  const zoom = 13;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      bounds={bounds}
      style={{ width: "100%", height: "100%", overflow: "auto" }}
    >
      <MapChangeView center={center} zoom={zoom} bounds={bounds} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {content}
    </MapContainer>
  );
}

export default Map;
