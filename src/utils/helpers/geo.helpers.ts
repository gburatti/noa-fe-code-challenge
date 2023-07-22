
const toRad = (number: number): number => number * Math.PI / 180;

// Computes the distance between two coordinates in meters
export const calcGeoDistance = (
  lon1: number,
  lat1: number,
  lon2: number,
  lat2: number,
): number => {

  // Radius of the earth in km
  const EARTH_R = 6371;

  // Javascript functions in radians
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  //
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  //
  const b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Distance in m
  const dist = EARTH_R * b * 1000;

  return dist;
};
