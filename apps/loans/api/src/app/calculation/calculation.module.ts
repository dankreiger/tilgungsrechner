import { Module } from '@nestjs/common';
import { CalculationResolver } from './calculation.resolver';
import { CalculationService } from './calculation.service';

@Module({
  controllers: [],
  providers: [CalculationService, CalculationResolver],
})
export class CalculationModule {}
