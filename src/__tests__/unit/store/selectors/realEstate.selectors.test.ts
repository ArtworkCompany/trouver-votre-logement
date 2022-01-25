import { RealEstate } from '../../../../core/domain/entities/realEstate';
import {
  getRealEstateSelector,
  getTotalNumberRealEstateSelector,
} from '../../../../store/domainData/realEstate/realEstate.selectors';
import { AppState } from '../../../../store/store';

describe('Unit: Real estate selector', () => {
  let initialState: AppState;
  let initialRealEstateSelector: {
    fetching: boolean;
    realEstateById: { [id: string]: RealEstate };
    realEstateAllIds: string[];
  };

  beforeEach(() => {
    initialState = {
      appState: {
        fetching: {
          realEstate: false,
        },
      },
      domainData: {
        realEstate: {
          data: {
            byId: {},
            allIds: [],
          },
        },
      },
    };

    initialRealEstateSelector = {
      fetching: false,
      realEstateById: {},
      realEstateAllIds: [],
    };
  });

  test('When there is no fetching and no real estate in the source', (done) => {
    const realEstateSelector = getRealEstateSelector(initialState);

    expect(realEstateSelector).toEqual(initialRealEstateSelector);

    done();
  });

  test('When there is a fetching and no realEstate in the source', (done) => {
    const state: AppState = {
      ...initialState,
      appState: {
        ...initialState.appState,
        fetching: {
          ...initialState.appState.fetching,
          realEstate: true,
        },
      },
    };

    const realEstateSelector = getRealEstateSelector(state);

    expect(realEstateSelector).toEqual({ ...initialRealEstateSelector, fetching: true });

    done();
  });

  test('When there is no fetching and some real estate in the source', (done) => {
    const state: AppState = {
      ...initialState,
      domainData: {
        ...initialState.domainData,
        realEstate: {
          data: {
            byId: { '123abc': { id: '123abc', name: 'RE 1', price: 100000 } },
            allIds: ['123abc'],
          },
        },
      },
    };

    const realEstateSelector = getRealEstateSelector(state);

    expect(realEstateSelector).toEqual({
      ...initialRealEstateSelector,
      realEstateById: {
        '123abc': { id: '123abc', name: 'RE 1', price: 100000 },
      },
      realEstateAllIds: ['123abc'],
    });

    done();
  });

  test('When there is the total number of real estate', (done) => {
    const state: AppState = {
      ...initialState,
      domainData: {
        ...initialState.domainData,
        realEstate: {
          data: {
            byId: { '123abc': { id: '123abc', name: 'RE 1', price: 100000 } },
            allIds: ['123abc'],
          },
        },
      },
    };

    const totalNumberRealEstateSelector = getTotalNumberRealEstateSelector(state);

    expect(totalNumberRealEstateSelector).toEqual(1);

    done();
  });
});
