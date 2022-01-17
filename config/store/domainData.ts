import { combineReducers } from 'redux';

import {
	realEstate,
	RealEstateReducer,
} from '../../src/realEstate/store/realEstate.reducer';

export interface DomainDataReducer {
	realEstate: RealEstateReducer;
}

export const domainData = combineReducers({ realEstate });
