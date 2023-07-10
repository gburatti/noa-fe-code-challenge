import {IIPInfo} from "../types/ipInfo.types";

class GeolocationService {
  private watchId: number = 0;

  public subscribeToCurrentLocation(callback: (e: GeolocationCoordinates) => void) {
    if (navigator.geolocation) {
      const onSuccess: PositionCallback = (position) => {
        callback(position.coords)
      }

      const onError: PositionErrorCallback = (positionError) => {
        alert(positionError.message)
      }

      const options: PositionOptions = {
        // enableHighAccuracy: true,
      }

      this.watchId = navigator.geolocation.watchPosition(onSuccess, onError, options)
    }
  }

  public unsubscribeToCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.clearWatch(this.watchId);
    }
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
