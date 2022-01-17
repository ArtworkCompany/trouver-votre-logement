import type { Action } from 'redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { RealEstateGateway } from '../../src/realEstate/core/domain/gateways/RealEstate.gateway';
import { realEstateEpics } from '../../src/realEstate/store/realEstate.epics';
import { appState, AppStateReducer } from './appState/appState';
import { domainData, DomainDataReducer } from './domainData';

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
	const epics = combineEpics(realEstateEpics);
	const store = createStore(reducers, composeWithDevTools(applyMiddleware(epicMiddleware)));

	epicMiddleware.run(epics);

	return store;
};
