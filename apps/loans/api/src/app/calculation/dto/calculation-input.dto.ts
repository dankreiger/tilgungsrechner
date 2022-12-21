import { CalculationState } from '@immo/loans/types';
import { IsBoolean, IsNumber, IsPositive, Max, Min } from 'class-validator';

export class CalculationInputDto implements CalculationState {
  @IsNumber()
  @IsPositive()
  @Min(0)
  @Max(100)
  readonly borrowingRate: number;

  @IsNumber()
  @IsPositive()
  @Min(0)
  @Max(100)
  readonly repaymentRate: number;

  @IsNumber()
  @Min(1)
  @Max(30)
  readonly fixedInterestPeriodInYears: number;

  @IsBoolean()
  readonly includeOverview: boolean;

  @IsNumber()
  @IsPositive()
  readonly loanAmount: number;
}
