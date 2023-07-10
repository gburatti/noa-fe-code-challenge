import { createContext } from 'react';
import { Store } from '../../utils/types';
import path from '../../routes/path';

export const INITIAL_STATE:Store = {
  userData: {},
  ipAddress: '',
  activePath: path.index
};

export const AppContext = createContext<{state:Store, dispatch: React.Dispatch<any>}>({state:INITIAL_STATE, dispatch: ()=>null});
