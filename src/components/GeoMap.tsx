import React, { useEffect, useMemo, useRef } from 'react';

import {
  MapContainer,
  TileLayer,
  Polyline,
  ZoomControl,
  Tooltip
} from 'react-leaflet'

import * as L from 'leaflet';

import {
  DEFAULT_POS,
  DEFAULT_ZOOM,
  LINE_STYLE_OPTS,
} from '../utils/constants/map.constants';

import GeolocationPosMarker from './GeolocationPosMarker';

import IpPosMarker from './IpPosMarker';

import { useGeolocation } from '../hooks/geolocation';

import { LatLon } from '../interfaces/geolocation';

import { useIpInfoContext } from '../context/ipinfo-context';

import { parseIpLoc } from '../utils/helpers/ip.helpers';

import { calcGeoDistance } from '../utils/helpers/geo.helpers';

const GeoMap: React.FC = () => {

  const mapRef = useRef<L.Map>(null);

  const initialBoundFit = useRef(true);

  const { loc } = useIpInfoContext();

  const { latitude, longitude, accuracy } = useGeolocation();

  const ipLocationMarkerPosition: (LatLon | null) = useMemo(
    () => !loc ? null : L.latLng(parseIpLoc(loc)),
    [loc]
  );

  const geolocationMakerPosition: (LatLon | null) = useMemo(
    () => (!latitude || !longitude)
      ? null
      : L.latLng([latitude, longitude]),
    [latitude, longitude]
  );

  // fit map bounds
  useEffect(() => {

    if (
      !ipLocationMarkerPosition
      || !geolocationMakerPosition
      || !mapRef.current
      || !initialBoundFit.current
    ) {
      return;
    }

    const bounds = L.latLngBounds([
      ipLocationMarkerPosition,
      geolocationMakerPosition
    ]);

    mapRef.current.fitBounds(bounds, { padding: [50, 50] });

    // fir bounds animation only first time
    initialBoundFit.current = false;

  }, [ipLocationMarkerPosition, geolocationMakerPosition]);

  const posDistance = useMemo(

    () => {
      if (
        !ipLocationMarkerPosition
        || !geolocationMakerPosition
      ) {
        return 0;
      }

      return calcGeoDistance(
        ipLocationMarkerPosition.lng,
        ipLocationMarkerPosition.lat,
        geolocationMakerPosition.lng,
        geolocationMakerPosition.lat,
      );
    },
    [ipLocationMarkerPosition, geolocationMakerPosition]
  );

  return (
    <MapContainer
      ref={mapRef}
      center={DEFAULT_POS}
      zoom={DEFAULT_ZOOM}
      scrollWheelZoom={true}
      zoomControl={false}
      className="h-full w-full"
    >

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ZoomControl position='topright' />

      {geolocationMakerPosition &&
        <GeolocationPosMarker
          position={geolocationMakerPosition}
          accuracy={accuracy}
        />
      }

      {ipLocationMarkerPosition &&
        <IpPosMarker position={ipLocationMarkerPosition} />
      }

      {(geolocationMakerPosition && ipLocationMarkerPosition) &&
        <Polyline
          pathOptions={LINE_STYLE_OPTS}
          positions={[
            geolocationMakerPosition,
            ipLocationMarkerPosition
          ]}
        >
          <Tooltip
            direction="bottom"
            offset={[0, 20]}
            opacity={1}
            permanent
          >
            <span style={{ fontWeight: 600 }}>{posDistance.toFixed(2)} m</span>
          </Tooltip>

        </Polyline>
      }
    </MapContainer>
  );
};

export default GeoMap;