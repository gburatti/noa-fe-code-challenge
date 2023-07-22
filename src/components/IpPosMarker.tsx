import React from 'react';

import { CircleMarker, Popup } from 'react-leaflet';

import { IpPosMarkerProps } from '../interfaces/ip';

import { IP_POSITION_OUTER_MARKER_STYLE_OPTS } from '../utils/constants/map.constants';

const IpPosMarker: React.FC<IpPosMarkerProps> = ({ position }) => (
  <>
    <CircleMarker
      center={position}
      radius={5}
      pathOptions={IP_POSITION_OUTER_MARKER_STYLE_OPTS}
    >
      <Popup>
        Your IP position is <span style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>[{position.lat}, {position.lng}]</span>
      </Popup>
    </CircleMarker>
  </>
);

export default IpPosMarker;