import React, { useEffect, useState } from "react";
import Layout from "components/Layout/Layout";
import { Outlet } from "react-router-dom";

import { AppContext, IpInfoState } from "./App.context";

import getIp from "api/getIp";
import getIpInfo from "api/getIpInfo";
import { usePosition } from "hooks/usePosition";

function App() {
  const [ipInfo, setIpInfo] = useState<IpInfoState>({ loading: true });
  const { latitude, longitude, error, loading } = usePosition(true);

  useEffect(() => {
    getIp()
      .then((ip) =>
        getIpInfo(ip).then((ipInfo) => {
          if (ipInfo?.error) {
            setIpInfo({ error: ipInfo.error.message, loading: false });
          } else {
            setIpInfo({ data: ipInfo, loading: false });
          }
        })
      )
      .catch(() => {
        setIpInfo({
          error: "Something went wrong, check your network connection.",
          loading: false,
        });
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        ipInfo,
        browserLocation: {
          data: latitude && longitude ? [latitude, longitude] : undefined,
          error,
          loading,
        },
      }}
    >
      <Layout>
        <Outlet />
      </Layout>
    </AppContext.Provider>
  );
}

export const appLoader = async () => {
  return;
};

export default App;
