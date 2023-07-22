import React from 'react';

import { useIpInfoContext } from '../context/ipinfo-context';

import { useGeolocation } from '../hooks/geolocation';

import StatsTable from '../components/StatsTable';

const Stats: React.FC = () => {

  const ipInfo = useIpInfoContext();

  const geolocationInfo = useGeolocation();

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '50px auto',
        padding: '0 5px'
      }}
    >
      <StatsTable
        ipInfoData={ipInfo}
        geolocationData={geolocationInfo}
      />
    </div>
  )
}

export default Stats