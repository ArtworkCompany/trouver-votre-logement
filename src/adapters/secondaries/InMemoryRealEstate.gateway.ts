import { RealEstate } from '../../core/domain/entities/realEstate';
import { RealEstateGateway } from '../../core/domain/gateways/RealEstate.gateway';

export default class InMemoryRealEstateGateway implements RealEstateGateway {
  constructor(private readonly realEstate: RealEstate[] = []) {}

  async retrieveAll(): Promise<RealEstate[]> {
    return this.realEstate;
  }

  feedWith(realEstate: RealEstate[]) {
    this.realEstate.push(...realEstate);
  }
}
