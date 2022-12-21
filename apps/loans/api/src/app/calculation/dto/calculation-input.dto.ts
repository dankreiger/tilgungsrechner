import { CalculationState } from '@immo/loans/types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive, Max, Min } from 'class-validator';

export class CalculationInputDto implements CalculationState {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @Min(0)
  @Max(100)
  readonly borrowingRate: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @Min(0)
  @Max(100)
  readonly repaymentRate: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(30)
  readonly fixedInterestPeriodInYears: number;

  @ApiProperty({ required: false })
  @IsOptional()
  readonly includeOverview: boolean;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  readonly loanAmount: number;
}
