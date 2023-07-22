import { GeolocationState } from "./geolocation";

import { IpInfoResponseObject } from "./ip";

export interface StatsTableProps {
  geolocationData: GeolocationState;
  ipInfoData: IpInfoResponseObject;
}