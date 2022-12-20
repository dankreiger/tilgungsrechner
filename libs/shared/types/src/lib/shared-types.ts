export interface CalculationPayload {
  readonly fixedInterestPeriodInYears: number;

  readonly includeOverview?: boolean;

  readonly loanAmount: number;

  readonly yearlyAmortizationPercent: number;

  readonly yearlyInterestPercent: number;
}
