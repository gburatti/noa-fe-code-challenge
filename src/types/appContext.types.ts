import {IIPInfo} from "./ipInfo.types";

export interface IAppContext {
  locationData?: GeolocationCoordinates;
  ipInfo?: IIPInfo;
}
