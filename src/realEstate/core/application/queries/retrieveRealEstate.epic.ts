import type { Epic } from 'redux-observable';
import { ofType } from 'redux-observable';
import { from, map, startWith, switchMap } from 'rxjs';

import { AppDependencies, AppState } from '../../../../../config/store/store';
import { RealEstateAction, RealEstateActionTypes, realEstateRetrieved, retrievingRealEstate } from '../../../store/realEstate.actions';

export const retrieveRealEstateEpic: Epic<RealEstateAction, RealEstateAction, AppState, AppDependencies> = (actions$, _state$, { realEstateGateway }) =>
	actions$.pipe(
		ofType<RealEstateAction, RealEstateActionTypes.RETRIEVE_REAL_ESTATE>(RealEstateActionTypes.RETRIEVE_REAL_ESTATE),
		switchMap(() =>
			from(realEstateGateway.retrieveAll()).pipe(
				map((realEstate) => realEstateRetrieved(realEstate)),
				startWith(retrievingRealEstate())
			)
		)
	);
