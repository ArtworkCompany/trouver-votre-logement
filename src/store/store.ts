import type { Action } from 'redux';
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  combineEpics,
  createEpicMiddleware,
} from 'redux-observable';

import { RealEstateGateway } from '../core/domain/gateways/RealEstate.gateway';
import {
  appState,
  AppStateReducer,
} from './appState/appState.reducer';
import {
  domainData,
  DomainDataReducer,
} from './domainData/domainData.reducer';
import { rootEpics } from './epics';

export interface AppState {
  appState: AppStateReducer;
  domainData: DomainDataReducer;
}

export interface AppDependencies {
  realEstateGateway: RealEstateGateway;
}

export const configureStore = (dependencies: AppDependencies) => {
  const epicMiddleware = createEpicMiddleware<Action, Action, AppState, AppDependencies>({ dependencies });
  const reducers = combineReducers({ appState, domainData });
  const epics = combineEpics(rootEpics);
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(epics);

  return store;
};

export type AppDispatch = ReturnType<typeof configureStore>['dispatch'];
