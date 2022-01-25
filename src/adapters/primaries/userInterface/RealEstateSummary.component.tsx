import React from 'react';

import { RealEstate } from '../../../core/domain/entities/realEstate';

interface RealEstateProps {
  realEstate: RealEstate;
}

const RealEstateSummary: React.FC<RealEstateProps> = ({ realEstate }) => (
  <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
    <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
      <img src={realEstate.imageUrl} alt={realEstate.name} className="w-full h-full object-center object-cover sm:w-full sm:h-full" />
    </div>
    <div className="flex-1 p-4 space-y-2 flex flex-col">
      <h3 className="text-sm font-medium text-gray-900">
        <a href={realEstate.id}>
          <span aria-hidden="true" className="absolute inset-0" />
          {realEstate.name}
        </a>
      </h3>
      <div className="flex-1 flex flex-col justify-end">
        <p className="text-base font-medium text-gray-900">{realEstate.price}</p>
      </div>
    </div>
  </div>
);

export default RealEstateSummary;
