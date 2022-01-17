import { combineReducers } from 'redux';

import {
	RealEstateAction,
	RealEstateActionTypes,
} from '../../../src/realEstate/store/realEstate.actions';

const fetchingRealEstate = (_: boolean, action: RealEstateAction) => action.type === RealEstateActionTypes.RETRIEVING_REAL_ESTATE;

export const fetching = combineReducers({ realEstate: fetchingRealEstate });
