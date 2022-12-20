import { CalculationPayload } from '@immo/shared/types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive, Max, Min } from 'class-validator';

export class CalculationInputDto implements CalculationPayload {
  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(30)
  readonly fixedInterestPeriodInYears: number;

  @ApiProperty({ required: false })
  @IsOptional()
  readonly includeOverview?: boolean;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  readonly loanAmount: number;
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @Min(0)
  @Max(100)
  readonly yearlyAmortizationPercent: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @Min(0)
  @Max(100)
  readonly yearlyInterestPercent: number;
}
