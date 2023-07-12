import React, { useContext } from "react";
import { AppContext } from "./App/App.context";
import Card from "components/Card/Card";
import Pill from "components/Pill/Pill";

export default function Stats() {
  const { browserLocation, ipInfo } = useContext(AppContext);
  return (
    <>
      <Card
        title={<>Browser Location{browserLocation.error && <Pill>!</Pill>}</>}
        loading={ipInfo.loading}
      >
        {browserLocation.error ? (
          browserLocation.error
        ) : (
          <>
            Lat: {browserLocation.data?.[0]}
            <br />
            Long: {browserLocation.data?.[1]}
          </>
        )}
      </Card>
      <Card
        title={<>IP Information{ipInfo.error && <Pill>!</Pill>}</>}
        loading={ipInfo.loading}
      >
        {ipInfo.error ? (
          ipInfo.error
        ) : (
          <pre>{JSON.stringify(ipInfo.data, null, 2)}</pre>
        )}
      </Card>
    </>
  );
}
