import { combineReducers } from 'redux';

import { realEstate, RealEstateReducer } from './realEstate/realEstate.reducer';

export interface DomainDataReducer {
  realEstate: RealEstateReducer;
}

export const domainData = combineReducers({ realEstate });
