import { combineReducers } from 'redux';

import {
  RealEstateAction,
  RealEstateActionTypes
} from '../domainData/realEstate/realEstate.actions';

const realEstate = (_: boolean, action: RealEstateAction) =>
  action.type === RealEstateActionTypes.RETRIEVING_REAL_ESTATE;

export const fetching = combineReducers({ realEstate });
