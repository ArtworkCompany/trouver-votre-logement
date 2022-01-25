import { AppState } from '../../store';

export const getRealEstateSelector = ({ appState, domainData }: AppState) => {
  const {
    fetching: { realEstate: fetchingRealEstate },
  } = appState;
  const {
    realEstate: {
      data: { byId, allIds },
    },
  } = domainData;

  return {
    fetching: fetchingRealEstate,
    realEstateById: byId,
    realEstateAllIds: allIds,
  };
};

export const getTotalNumberRealEstateSelector = ({ domainData }: AppState) => domainData.realEstate.data.allIds.length;
