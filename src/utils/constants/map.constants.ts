import * as L from 'leaflet';

export const DEFAULT_ZOOM = 13;

export const DEFAULT_POS = L.latLng([45.071104, 7.670225]);

export const POSITION_MARKER_STYLE_OPTS = {
  color: '#F0A202',
  fillOpacity: 1,
  opacity: 1,
  weight: 4
};

export const POSITION_OUTER_MARKER_STYLE_OPTS = {
  color: '#F0A202',
  fillOpacity: .4,
  opacity: 0,
  weight: 4
};


export const IP_POSITION_OUTER_MARKER_STYLE_OPTS = {
  color: '#E85D75',
  fillOpacity: 1,
  opacity: 1,
  weight: 4
};

export const LINE_STYLE_OPTS = { color: '#6B0504', opacity: 1 };