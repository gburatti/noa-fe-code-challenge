import React, { useContext, createContext } from "react";

import { IpInfoContextProps } from "../interfaces/ipcontext";

import { IpInfoResponseObject } from "../interfaces/ip";

import { useIpInfo } from "../hooks/ipinfo";

import { IP_INFO_EMPTY_RESPONSE } from "../utils/constants/ipinfo.constants";

const IpInfoContext = createContext<IpInfoResponseObject>(IP_INFO_EMPTY_RESPONSE);

export const useIpInfoContext = () => useContext(IpInfoContext);

const IpInfoContextProvider: React.FC<IpInfoContextProps> = ({ children }) => {

  const ipInfo = useIpInfo();

  return (
    <IpInfoContext.Provider value={ipInfo}>
      {children}
    </IpInfoContext.Provider>
  );
};

export default IpInfoContextProvider;

