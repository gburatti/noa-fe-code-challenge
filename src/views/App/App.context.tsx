import { createContext } from "react";

export interface IpInfo {
  ip: string;
  hostname: string;
  city: string;
  region: string;
  country: string;
  loc: string; //"49.4445,32.0574"
  org: string;
  postal: string;
  timezone: string;
}

export type BrowserLocation = [number, number];

export interface BrowserLocationState {
  data?: BrowserLocation;
  loading?: boolean;
  error?: string;
}

export interface IpInfoState {
  data?: IpInfo;
  loading?: boolean;
  error?: string;
}

export interface IAppContext {
  browserLocation: BrowserLocationState;
  ipInfo: IpInfoState;
}

export const AppContext = createContext<IAppContext>({
  ipInfo: { loading: true },
  browserLocation: { loading: true },
});
