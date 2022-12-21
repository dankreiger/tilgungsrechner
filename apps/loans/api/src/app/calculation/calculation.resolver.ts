import { UsePipes, ValidationPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { CalculationService } from './calculation.service';
import { CalculationInputDto } from './dto/calculation-input.dto';

@Resolver('Calculation')
export class CalculationResolver {
  constructor(private calculationService: CalculationService) {}

  @Query()
  @UsePipes(new ValidationPipe())
  loanRepaymentDetails(@Args('filter') filter: CalculationInputDto) {
    return this.calculationService.calculateMonthlyPaymentDetails(filter);
  }
}
