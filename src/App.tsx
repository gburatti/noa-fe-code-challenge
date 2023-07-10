import { useContext, useEffect, useMemo, useState } from 'react';
import { MapContainer, Marker,Polyline,TileLayer, Tooltip } from 'react-leaflet';
import { calDistance, getLocationFromBrowser } from './utils/helper';
import { LatLngExpression } from 'leaflet';
import path from './routes/path';
import { Coords } from './utils/types';
import { AppContext } from './store/context/app.context';
import { SET_IPADDRESS, SET_PATH, SET_USERDATA } from './store/context/actions';
import { IPAddress, Userdata } from './utils/constant';

const App=()=> {
  const [coord, setCoords] = useState<Coords>({} as Coords)
  const {state, dispatch} = useContext(AppContext)
  useEffect(()=>{
    fetch("https://api.ipify.org")
      .then(response => {
        return response.text()
      })
      .then(data => {
        localStorage.setItem(IPAddress, JSON.stringify(data))
        dispatch({type: SET_IPADDRESS, payload: data})
        getUserdata(data)
        return data
      })
  }, [])

    const getUserdata=(ipAddress: string)=>{
        const token = process.env.REACT_APP_TOKEN
        fetch(`https://ipinfo.io/${ipAddress}?token=${token}`)
        .then(res=> {return res.json()})
        .then(data=>{ 
          localStorage.setItem(Userdata, JSON.stringify(data))
          dispatch({type: SET_USERDATA, payload: data})
        })
      }
  
      const success=(position: GeolocationPosition)=>{
        const log: number = position.coords.longitude
        const lat: number = position.coords.latitude
        setCoords({log: log, lat: lat})
    }

    useEffect(()=>{
        return getLocationFromBrowser(success)
    }, [navigator.geolocation]) 

    const position: LatLngExpression = useMemo(()=>{
      return [coord.lat, coord.log]
    }, [coord])

    const positionByIP: any=useMemo(()=>{
      if(Object.keys(state.userData).length === 0) return
        const loc = state.userData.loc
        const position = loc.split(',')
        return position
    }, [state.userData])

  return (
    <div className=''>
      <div className='navigation'>
        <nav><a href={path.stats}>Ip Statistics</a></nav>
      </div>
      <div className='container'>
        {Object.keys(coord).length !== 0 && Object.keys(state.userData).length!==0? 
          <MapContainer bounds={[position, positionByIP]} className='custom' zoom={10} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             <Marker position={position} draggable={false}/>
            <Marker position={positionByIP} draggable={false}/>
            <Polyline  positions={[position, positionByIP]} >
               <Tooltip direction="bottom" offset={[position[0]/2, position[1]/2]}  opacity={1} permanent>
                  {calDistance(position, positionByIP)}
                </Tooltip>
              </Polyline>
        </MapContainer>:null}
    </div>
    </div>
    
     
 
  );
}

export default App;
