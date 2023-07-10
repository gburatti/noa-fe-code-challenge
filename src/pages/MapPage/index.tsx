import React, {useMemo} from 'react';
import {MapContainer, Marker, Polyline, TileLayer, Tooltip} from "react-leaflet";
import useAppContext from "../../context/useAppContext";
import {LatLngExpression} from "leaflet";
import styles from "./styles.module.css"
import geolocationService from "../../services/geolocation.service";

interface IProps {
}

function MapPage(props: IProps) {
  const {locationData, ipInfo} = useAppContext();

  const currentLocation: LatLngExpression = useMemo(() => {
    if (locationData) return ([locationData.latitude, locationData.longitude])

    return [0, 0];
  }, [locationData]);

  const ipLocation: LatLngExpression = useMemo(() => {
    if (ipInfo?.loc) {
      const loc = ipInfo.loc.split(",").map(l => Number(l));
      return [loc[0], loc[1]];
    } else {
      return [0, 0]
    }
  }, [ipInfo?.loc])

  const distance = useMemo(() => {
    return geolocationService.calculateDistance(currentLocation[0], currentLocation[1], ipLocation[0], ipLocation[1]);
  }, [currentLocation, ipLocation])

  return (
    <div>
      {
        !locationData || !ipInfo ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <div className={styles.map}>
            <MapContainer
              center={currentLocation}
              zoom={13}
              scrollWheelZoom={true}
              style={{height: "100%"}}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={currentLocation}>
                <Tooltip>
                  Your current location
                </Tooltip>
              </Marker>
              <Marker position={ipLocation}>
                <Tooltip>
                  Your IP Location
                </Tooltip>
              </Marker>
              <Polyline
                pathOptions={{color: "#000000"}}
                positions={[
                  currentLocation, ipLocation
                ]}
              >
                <Tooltip sticky>Distance: {distance} km</Tooltip>
              </Polyline>
            </MapContainer>
          </div>
        )
      }

    </div>
  );
}

export default MapPage;
