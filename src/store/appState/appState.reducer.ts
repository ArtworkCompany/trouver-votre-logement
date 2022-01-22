import { combineReducers } from 'redux';

import { fetching } from './fetching.reducer';

export interface AppStateReducer {
  fetching: {
    realEstate: boolean;
  };
}

export const appState = combineReducers({ fetching });
