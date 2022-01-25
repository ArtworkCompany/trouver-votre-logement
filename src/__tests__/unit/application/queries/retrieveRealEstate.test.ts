import type { Store } from 'redux';

import InMemoryRealEstateGateway from '../../../../adapters/secondaries/InMemoryRealEstate.gateway';
import { RealEstate } from '../../../../core/domain/entities/realEstate';
import { retrieveRealEstate } from '../../../../store/domainData/realEstate/realEstate.actions';
import {
  AppState,
  configureStore,
} from '../../../../store/store';

describe('Unit: Retrieve all real estate', () => {
  let realEstateGateway: InMemoryRealEstateGateway;
  let store: Store<AppState>;
  let initialState: AppState;

  const listenToChangedState = (expectedState: AppState, actionPositionNumber: number, done: jest.DoneCallback) => {
    let positionNumber = 1;

    store.subscribe(() => {
      if (positionNumber === actionPositionNumber) {
        expect(store.getState()).toEqual(expectedState);
        done();
      }
      positionNumber += 1;
    });
  };

  const retrieve = () => {
    store.dispatch(retrieveRealEstate());
  };

  beforeEach(() => {
    realEstateGateway = new InMemoryRealEstateGateway();
    store = configureStore({ realEstateGateway });
    initialState = store.getState();
  });

  test('When real estate retrieval is in progress', (done) => {
    expect.assertions(1);

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

    retrieve();
  });

  test('When there is no real estate in the source', (done) => {
    expect.assertions(1);

    listenToChangedState(initialState, 3, done);

    retrieve();
  });

  test('When there is some real estate in the source', (done) => {
    expect.assertions(1);

    const listRealEstate: RealEstate[] = [
      { id: '1', name: 'RE 1', price: 100000 },
      { id: '2', name: 'RE 2', price: 124000 },
    ];

    const realEstateById = listRealEstate.reduce((obj, realEstate) => ({ ...obj, [realEstate.id]: realEstate }), {});
    const realEstateAllIds = Object.keys(realEstateById);

    realEstateGateway.feedWith(listRealEstate);

    listenToChangedState(
      {
        ...initialState,
        domainData: {
          ...initialState.domainData,
          realEstate: {
            data: {
              byId: realEstateById,
              allIds: realEstateAllIds,
            },
          },
        },
      },
      3,
      done
    );

    retrieve();
  });
});
