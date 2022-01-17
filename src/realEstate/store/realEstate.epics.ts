import { combineEpics } from 'redux-observable';

import { retrieveRealEstateEpic } from '../core/application/queries/retrieveRealEstate.epic';

export const realEstateEpics = combineEpics(retrieveRealEstateEpic);
