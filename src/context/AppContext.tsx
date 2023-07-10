import React, {createContext, useEffect, useState} from 'react';
import geolocationService from "../services/geolocation.service";
import {IAppContext} from "../types/appContext.types";
import {IIPInfo} from "../types/ipInfo.types";

export const AppContext = createContext<IAppContext>({});

interface IProps {
  children: React.ReactNode
}

function AppContextProvider({children}: IProps) {
  const [locationData, setLocationData] = useState<GeolocationCoordinates>();
  const [ipInfo, setIPInfo] = useState<IIPInfo>();

  useEffect(() => {
    geolocationService.subscribeToCurrentLocation(position => {
      setLocationData(position)
    });

    geolocationService.getIPInfo()
      .then(info => {
        setIPInfo(info);
      })
      .catch(err => {
        alert(err.message)
      })

    return () => {
      geolocationService.unsubscribeToCurrentLocation();
    }
  }, []);

  const value: IAppContext = {
    locationData,
    ipInfo
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
