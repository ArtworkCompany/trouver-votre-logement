import React, { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { retrieveRealEstate } from '../../../store/domainData/realEstate/realEstate.actions';
import { getRealEstateSelector } from '../../../store/domainData/realEstate/realEstate.selectors';
import { AppDispatch } from '../../../store/store';
import Loading from './Loading.component';
import RealEstateSummary from './RealEstateSummary.component';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { fetching, realEstateAllIds, realEstateById } = useSelector(getRealEstateSelector);

  useEffect(() => {
    dispatch(retrieveRealEstate());
  }, [dispatch]);

  return fetching ? (
    <Loading />
  ) : (
    <div className="bg-white">
      <main className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
        <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          {realEstateAllIds.map((realEstateId) => (
            <RealEstateSummary key={realEstateId} realEstate={realEstateById[realEstateId]} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
