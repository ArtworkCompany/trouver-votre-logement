import { combineReducers } from 'redux';

import { RealEstate } from '../../../core/domain/entities/realEstate';
import {
  RealEstateAction,
  RealEstateActionTypes,
} from './realEstate.actions';

export interface RealEstateDataReducer {
  byId: { [id: string]: RealEstate },
  allIds: string[]
}

export interface RealEstateReducer {
  data: RealEstateDataReducer
}

const data = (state: RealEstateDataReducer = { byId: {}, allIds: [] }, action: RealEstateAction) => {
  if (action.type === RealEstateActionTypes.REAL_ESTATE_RETRIEVED)
    return action.payload;

  return state;
};

export const realEstate = combineReducers({ data });
