import { RealEstate } from '../entities/realEstate';

export interface RealEstateGateway {
	retrieveAll(): Promise<RealEstate[]>;
}
