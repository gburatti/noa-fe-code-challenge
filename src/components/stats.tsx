import { useContext, useEffect, useState } from 'react'
import path from '../routes/path'
import { IpItem } from './ipItem'
import { Coords } from '../utils/types'
import { getLocationFromBrowser } from '../utils/helper'
import { AppContext } from '../store/context/app.context'
import { IPAddress, Userdata } from '../utils/constant'
import { SET_IPADDRESS, SET_USERDATA } from '../store/context/actions'

const IPStats=()=>{
    const [coord, setCoords] = useState<Coords>({} as {log: number, lat: number})
    const {state, dispatch} = useContext(AppContext)

    useEffect(()=>{
        const ip = localStorage.getItem(IPAddress)
        const data = localStorage.getItem(Userdata)
        if(ip){
            dispatch({type: SET_IPADDRESS, payload:ip})
        }
        if(data){
            dispatch({type: SET_USERDATA, payload: JSON.parse(data)})
        }
    }, [])

    const renderIpInfo=()=>{
        const items: JSX.Element[] = []
        for(let key in state.userData){
            const item: string = state.userData[key]
            items.push(<IpItem key={key} field={key} value={item}/>)
        }
      
        return items
    }

    const success=(position: GeolocationPosition)=>{
        const log: number = position.coords.longitude
        const lat: number = position.coords.latitude
        setCoords({log, lat})
    }
     
    useEffect(()=>{
        return getLocationFromBrowser(success)
    }, [navigator.geolocation]) 

    return  (
        <div>
            <div className='navigation'>
                <nav>
                    <a href={path.index}>Full map</a>
                </nav>
            </div>
         <div className='container'>
            <div>
                <div className='summary'>
                    <span>Your are located at </span>
                    <span>Latitude: <em>{coord.lat}</em></span>
                    <span> and Logitude: <em>{ coord.log}</em></span>
                </div>
                <div className='ip-details'>
                    {state.userData? renderIpInfo(): null}
                </div>
            </div>
        </div>
    </div>)
}

export default IPStats