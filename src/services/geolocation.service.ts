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

  public calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const earthRadius = 6371;

    const latRad1 = this.degToRad(lat1);
    const lonRad1 = this.degToRad(lon1);
    const latRad2 = this.degToRad(lat2);
    const lonRad2 = this.degToRad(lon2);

    const latDiff = latRad2 - latRad1;
    const lonDiff = lonRad2 - lonRad1;

    const a =
      Math.sin(latDiff / 2) ** 2 +
      Math.cos(latRad1) * Math.cos(latRad2) * Math.sin(lonDiff / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance.toFixed(4);
  }

  private degToRad(degrees: number) {
    return degrees * (Math.PI / 180);
  }

}

const geolocationService = new GeolocationService();
export default geolocationService;
