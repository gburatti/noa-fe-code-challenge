import { IP_INFO_EMPTY_RESPONSE, IP_INFO_TOKEN } from "../constants/ipinfo.constants";

import { IpResponseInt, IpInfoResponseInt } from "../../interfaces/ip";
import { LatLon } from "../../interfaces/geolocation";

export const getIp = async (): Promise<IpResponseInt> => {
  try {
    const res = await fetch('https://api.ipify.org/?format=json');
    const ipJson = await res.json();
    const { ip } = ipJson;
    return { ip };
  } catch (error) {
    return { error, ip: null };
  }
};

export const getIpInfo = async (ipAddress: string): Promise<IpInfoResponseInt> => {
  try {
    const res = await fetch(`https://ipinfo.io/${ipAddress}?token=${IP_INFO_TOKEN}`);
    const ipInfo = await res.json();
    return { ipInfo };
  } catch (error) {
    return {
      error, ipInfo: IP_INFO_EMPTY_RESPONSE
    };
  }
};

export const parseIpLoc = (loc: string): [number, number] => {
  const [lat, lon] = loc.split(',');
  return [parseFloat(lat), parseFloat(lon)];
};