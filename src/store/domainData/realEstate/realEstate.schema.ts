import { schema } from 'normalizr';

import { RealEstate } from '../../../core/domain/entities/realEstate';

export interface RealEstateNormalized {
  realEstate: { [id: string]: RealEstate }
}

export const realEstateSchema = new schema.Entity('realEstate');