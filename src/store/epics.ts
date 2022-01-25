import { combineEpics } from 'redux-observable';

import { retrieveRealEstateEpic } from '../core/application/queries/retrieveRealEstate.epic';

const realEstateEpics = combineEpics(retrieveRealEstateEpic);

export const rootEpics = combineEpics(realEstateEpics);
