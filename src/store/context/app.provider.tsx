import React, { useReducer } from 'react';
import { AppContext, INITIAL_STATE } from './app.context';
import { appReducer } from '../reducer';



const AppProvider=({children}: {children: React.ReactNode})=>{
    const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
