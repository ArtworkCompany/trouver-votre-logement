import { RealEstateDataReducer } from './realEstate.reducer';

export enum RealEstateActionTypes {
  RETRIEVE_REAL_ESTATE = '@realEstate/retrieve',
  RETRIEVING_REAL_ESTATE = '@realEstate/retrieving',
  REAL_ESTATE_RETRIEVED = '@realEstate/retrieved'
}

export interface RetrieveRealEstateAction {
  type: RealEstateActionTypes.RETRIEVE_REAL_ESTATE;
}

export interface RetrievingRealEstateAction {
  type: RealEstateActionTypes.RETRIEVING_REAL_ESTATE;
}

export interface RealEstateRetrievedAction {
  type: RealEstateActionTypes.REAL_ESTATE_RETRIEVED;
  payload: RealEstateDataReducer;
}

export const retrieveRealEstate = (): RetrieveRealEstateAction => ({
  type: RealEstateActionTypes.RETRIEVE_REAL_ESTATE
});
export const retrievingRealEstate = (): RetrievingRealEstateAction => ({
  type: RealEstateActionTypes.RETRIEVING_REAL_ESTATE
});
export const realEstateRetrieved = (
  realEstate: RealEstateDataReducer
): RealEstateRetrievedAction => ({
  type: RealEstateActionTypes.REAL_ESTATE_RETRIEVED,
  payload: realEstate
});

export type RealEstateAction =
  | RetrieveRealEstateAction
  | RetrievingRealEstateAction
  | RealEstateRetrievedAction;
