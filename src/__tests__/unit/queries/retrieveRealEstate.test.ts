import { Store } from 'redux';

import {
	AppState,
	configureStore,
} from '../../../../config/store/store';
import InMemoryRealEstateGateway from '../../../realEstate/adapters/secondaries/InMemoryRealEstate.gateway';
import { RealEstate } from '../../../realEstate/core/domain/entities/realEstate';
import { retrieveRealEstate } from '../../../realEstate/store/realEstate.actions';

describe('Unit: Retrieve all real estate', () => {
	let realEstateGateway: InMemoryRealEstateGateway;
	let store: Store<AppState>;
	let initialState: AppState;

	beforeEach(() => {
		realEstateGateway = new InMemoryRealEstateGateway();
		store = configureStore({ realEstateGateway });
		initialState = store.getState();
	});

	it('When real estate retrieval is in progress', (done) => {
		listenToChangedState(
			{
				...initialState,
				appState: {
					...initialState.appState,
					fetching: {
						realEstate: true,
					},
				},
			},
			2,
			done
		);

		store.dispatch(retrieveRealEstate());
	});

	it('When there is no real estate in the source', (done) => {
		listenToChangedState(initialState, 3, done);

		store.dispatch(retrieveRealEstate());
	});

	it('When there is some real estate in the source', (done) => {
		const listRealEstate: RealEstate[] = [
			{ id: '1', name: 'Logirep 1', price: 123447 },
			{ id: '2', name: 'Logirep 2', price: 747845 },
		];

		realEstateGateway.feedWith(listRealEstate);

		listenToChangedState(
			{
				...initialState,
				appState: {
					...initialState.appState,
					fetching: {
						...initialState.appState.fetching,
						realEstate: false,
					},
				},
				domainData: {
					...initialState.domainData,
					realEstate: {
						data: listRealEstate,
					},
				},
			},
			3,
			done
		);

		store.dispatch(retrieveRealEstate());
	});

	const listenToChangedState = (expectedState: AppState, actionPositionNumber: number, done: jest.DoneCallback) => {
		let positionNumber: number = 1;

		store.subscribe(() => {
			if (positionNumber === actionPositionNumber) {
				expect(store.getState()).toEqual(expectedState);
				done();
			}
			positionNumber += 1;
		});
	};
});
