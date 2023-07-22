import React from 'react';

import { StatsTableProps } from '../interfaces/stats';

const StatsTable: React.FC<StatsTableProps> = ({ geolocationData, ipInfoData }) => {

  return (
    <>

      <h2>Geolocation data</h2>

      <div
        className='box-shadow-sm w-full'
        style={{ overflow: 'auto' }}
      >
        <table>
          <thead>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Accuracy [m]</th>
            </tr>
          </thead>
          <tbody>
            {geolocationData.loading
              ? (
                <tr>
                  <td>Loading Geolocation data...</td>
                </tr>
              ) : (
                <tr>
                  <td>{geolocationData.latitude}</td>
                  <td>{geolocationData.longitude}</td>
                  <td>{geolocationData.accuracy}</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>

      <h2 style={{ marginTop: 100 }}>IP info data</h2>

      <div
        className='box-shadow-sm w-full'
        style={{ overflow: 'auto' }}
      >
        <table className='box-shadow-sm'>
          <thead>
            <tr>
              <th>IP</th>
              <th>Hostname</th>
              <th>City</th>
              <th>Region</th>
              <th>Postal Code</th>
              <th>Country</th>
              <th>Location</th>
              <th>ISP</th>
              <th>Timezone</th>
            </tr>
          </thead>
          <tbody>
            {!ipInfoData.ip
              ? (
                <tr>
                  <td>Loading IP data...</td>
                </tr>
              ) : (
                <tr>
                  <td>{ipInfoData.ip}</td>
                  <td>{ipInfoData.hostname}</td>
                  <td>{ipInfoData.city}</td>
                  <td>{ipInfoData.region}</td>
                  <td>{ipInfoData.postal}</td>
                  <td>{ipInfoData.country}</td>
                  <td>{ipInfoData.loc}</td>
                  <td>{ipInfoData.org}</td>
                  <td>{ipInfoData.timezone}</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StatsTable;