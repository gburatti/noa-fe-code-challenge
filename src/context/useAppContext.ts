import {useContext} from "react";
import {AppContext} from "./AppContext";

function useAppContext() {
  const {locationData, ipInfo} = useContext(AppContext);

  return ({
    locationData,
    ipInfo
  });
}

export default useAppContext;
