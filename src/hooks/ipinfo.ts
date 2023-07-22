import { useCallback, useEffect, useState } from "react";

import { getIp, getIpInfo } from "../utils/helpers/ip.helpers";

import {
  IpResponseInt,
  IpInfoResponseObject,
  IpInfoResponseInt,
} from "../interfaces/ip";

import { IP_INFO_EMPTY_RESPONSE } from "../utils/constants/ipinfo.constants";

export const useIpInfo = () => {

  const [ipInformation, setIpInformation] = useState<IpInfoResponseObject>(IP_INFO_EMPTY_RESPONSE);

  const getIpInformation = useCallback(
    async () => {

      const {
        ip,
        error,
      }: IpResponseInt = await getIp();

      if (error) {
        console.error(error);
        return;
      }

      if (!ip) {
        return;
      }

      const {
        ipInfo,
        error: ipInfoError,
      }: IpInfoResponseInt = await getIpInfo(ip);

      if (ipInfoError) {
        console.error(ipInfoError);
        return;
      }

      setIpInformation(ipInfo);
    },
    []
  );

  useEffect(() => {
    // getting IP info
    getIpInformation();
  }, []);

  return ipInformation;
};