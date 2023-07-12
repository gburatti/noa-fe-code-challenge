import { LatLngBoundsExpression } from "leaflet";
import React from "react";
import { useMap } from "react-leaflet";

const MapChangeView: React.FC<{
  center?: [number, number];
  zoom: number;
  bounds?: LatLngBoundsExpression;
}> = ({ center, zoom, bounds }) => {
  const map = useMap();
  center && map.setView(center, zoom);
  bounds && map.setMaxBounds(bounds);
  return null;
};

export default MapChangeView;
