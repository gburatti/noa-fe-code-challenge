import { LatLon } from "./geolocation";

export interface IpResponseInt {
  ip: string | null;
  error?: any;
}

export interface IpInfoResponseObject {
  ip: string | null;
  hostname: string | null;
  city: string | null;
  region: string | null;
  country: string | null;
  loc: string | null;
  org: string | null;
  postal: string | null;
  timezone: string | null;
}

export interface IpInfoResponseInt {
  ipInfo: IpInfoResponseObject;
  error?: any;
}

export interface IpPosMarkerProps {
  position: LatLon;
}