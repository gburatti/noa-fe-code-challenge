import React from 'react';
import styles from "./styles.module.css";
import Container from "../../components/Container";
import useAppContext from "../../context/useAppContext";

interface IProps {
}

function IPStatsPage(props: IProps) {
  const {locationData, ipInfo} = useAppContext();

  return (
    <Container className={styles.pageWrapper}>
      <h1>Location & IP Stats</h1>

      <div className={styles.infoCards}>
        <div className={styles.card}>
          <h4>Your Location</h4>

          {
            !locationData ? (
              <div>
                <p>Loading...</p>
              </div>
            ) : (
              <table className={styles.table}>
                <tr>
                  <td>Longitude:</td>
                  <td>{locationData.longitude}</td>
                </tr>
                <tr>
                  <td>Latitude:</td>
                  <td>{locationData.latitude}</td>
                </tr>
                <tr>
                  <td>Accuracy:</td>
                  <td>{locationData.accuracy} meters</td>
                </tr>
              </table>
            )
          }
        </div>

        <div className={styles.card}>
          <h4>Your IP Info</h4>

          {
            !ipInfo ? (
              <div>
                <p>Loading...</p>
              </div>
            ) : (
              <>
                <img
                  src={`https://flagsapi.com/${ipInfo.country}/flat/64.png`}
                  alt={`${ipInfo.country} Flag`}
                  className={styles.flag}
                />

                <table className={styles.table}>
                  <tr>
                    <td>IP Address:</td>
                    <td>{ipInfo.ip}</td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td>{ipInfo.city}</td>
                  </tr>
                  <tr>
                    <td>Region</td>
                    <td>{ipInfo.region}</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>{ipInfo.country}</td>
                  </tr>
                  <tr>
                    <td>Timezone</td>
                    <td>{ipInfo.timezone}</td>
                  </tr>
                  <tr>
                    <td>IP Location</td>
                    <td>{ipInfo.loc}</td>
                  </tr>
                  <tr>
                    <td>Network organization</td>
                    <td>{ipInfo.org}</td>
                  </tr>
                </table>
              </>
            )
          }

        </div>
      </div>
    </Container>
  );
}

export default IPStatsPage;
