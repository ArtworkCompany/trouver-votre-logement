import { normalize } from 'normalizr';
import type { Epic } from 'redux-observable';
import { ofType } from 'redux-observable';
import {
  from,
  map,
  startWith,
  switchMap,
} from 'rxjs';

import {
  RealEstateAction,
  RealEstateActionTypes,
  realEstateRetrieved,
  retrievingRealEstate,
} from '../../../store/domainData/realEstate/realEstate.actions';
import {
  RealEstateNormalized,
  realEstateSchema,
} from '../../../store/domainData/realEstate/realEstate.schema';
import {
  AppDependencies,
  AppState,
} from '../../../store/store';
import { RealEstate } from '../../domain/entities/realEstate';

export const retrieveRealEstateEpic: Epic<RealEstateAction, RealEstateAction, AppState, AppDependencies> = (actions$, _state$, { realEstateGateway }) =>
  actions$.pipe(
    ofType<RealEstateAction, RealEstateActionTypes.RETRIEVE_REAL_ESTATE>(RealEstateActionTypes.RETRIEVE_REAL_ESTATE),
    switchMap(() =>
      from(realEstateGateway.retrieveAll()).pipe(
        map((realEstate) => {
          const { entities: { realEstate: realEstateById = {} }, result } = normalize<RealEstate[], RealEstateNormalized, string[]>(realEstate, [realEstateSchema]);

          return realEstateRetrieved({ byId: realEstateById, allIds: result })
        }),
        startWith(retrievingRealEstate())
      )
    )
  );
