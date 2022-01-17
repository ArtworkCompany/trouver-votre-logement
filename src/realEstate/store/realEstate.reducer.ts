import { combineReducers } from 'redux';

import { RealEstate } from '../../realEstate/core/domain/entities/realEstate';
import { RealEstateAction, RealEstateActionTypes } from './realEstate.actions';

export interface RealEstateReducer {
	data: RealEstate[];
}

const data = (state: RealEstate[] = [], action: RealEstateAction) => {
	if (action.type === RealEstateActionTypes.REAL_ESTATE_RETRIEVED) return action.payload;

	return state;
};

export const realEstate = combineReducers({ data });
