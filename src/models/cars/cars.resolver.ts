import { Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './entities/cars';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  public async getCars(): Promise<Car[]> {
    return await this.carsService.getCars().catch((err) => {
      throw err;
    });
  }
}
