import { RealEstate } from '../../core/domain/entities/realEstate';
import { RealEstateGateway } from '../../core/domain/gateways/RealEstate.gateway';

export default class InMemoryRealEstateGateway implements RealEstateGateway {
  constructor(private readonly realEstate: RealEstate[] = []) {}

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async retrieveAll(): Promise<RealEstate[]> {
    await this.sleep(1000);
    return this.realEstate;
  }

  feedWith(realEstate: RealEstate[]) {
    this.realEstate.push(...realEstate);
  }
}
