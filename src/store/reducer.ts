import { SET_IPADDRESS, SET_USERDATA } from "./context/actions";

export const appReducer=(state: any, action: any)=> {

  switch (action.type) {
    case SET_USERDATA:
      return {
        ...state,
        userData: action.payload,
      };
    case SET_IPADDRESS:
      return {
        ...state,
        ipAddress: action.payload,
      };
    default: 
        return state
    }
   
}