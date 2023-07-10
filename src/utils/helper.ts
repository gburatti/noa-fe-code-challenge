function error() {
 window.prompt("Unable to retrieve your location");
}

export const getLocationFromBrowser=(success: PositionCallback)=>{
    const location = navigator.geolocation
   
    if(!location){
        window.prompt('Browser does not support geolocation')
    }else {
        navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true})
    }
}

export const toCamoCase = (value: string) => {
  const capitalized:string = value.charAt(0).toUpperCase() + value.slice(1);
  return capitalized;
};

export const calDistance =(position: number[], position2: number[])=>{
    const eartthRadius = 6371;
    const latDiff = position[0] - position2[1]
    const lngDiff = position[0] - position2[1]

    const lat1 = position[0]
    const lat2 = position[1]

    const lat2Deg = (latDiff * Math.PI)/180
    const lng2Deg = (lngDiff * Math.PI)/180
    const comRad = Math.sin(lat2Deg/2) * Math.sin(lat2Deg/2) +
        Math.sin(lng2Deg/2) * Math.sin(lng2Deg/2) * Math.cos(lat1) * Math.cos(lat2); 
      var comTan = 2 * Math.atan2(Math.sqrt(comRad), Math.sqrt(1-comRad)); 
      var distance = eartthRadius* comTan;
      return distance;
}