import {IIPInfo} from "../types/ipInfo.types";

class GeolocationService {
  public getCurrentLocation(): Promise<GeolocationCoordinates> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        const onSuccess: PositionCallback = (position) => {
          resolve(position.coords)
        }

        const onError: PositionErrorCallback = (positionError) => {
          reject(positionError)
        }

        const options: PositionOptions = {
          enableHighAccuracy: true,
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
      }
    })
  }

  public getIPInfo(): Promise<IIPInfo> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`https://ipinfo.io/json?token=${process.env.REACT_APP_IP_INFO_TOKEN}`);
        const info: IIPInfo = await response.json();
        resolve(info);
      } catch (err) {
        reject(err)
      }
    })
  }

}

const geolocationService = new GeolocationService();
export default geolocationService;
