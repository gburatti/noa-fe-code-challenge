import React from 'react';

import { CircleMarker, Popup } from 'react-leaflet';

import { GeolocationPosMarkerProps } from '../interfaces/geolocation';

import { POSITION_MARKER_STYLE_OPTS, POSITION_OUTER_MARKER_STYLE_OPTS } from '../utils/constants/map.constants';

const GeolocationPosMarker: React.FC<GeolocationPosMarkerProps> = ({
  position,
  accuracy,
}) => (
  <>
    <CircleMarker
      center={position}
      radius={3}
      pathOptions={POSITION_MARKER_STYLE_OPTS}
    />
    <CircleMarker
      center={position}
      radius={accuracy || 20}
      pathOptions={POSITION_OUTER_MARKER_STYLE_OPTS}
    >
      <Popup>
        Your geolocation position is <span style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>[{position.lat}, {position.lng}]</span>, with an accuracy of <span style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>{accuracy} m</span>
      </Popup>
    </CircleMarker>
  </>
);

export default GeolocationPosMarker;