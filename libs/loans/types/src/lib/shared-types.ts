export interface CalculationState {
  readonly loanAmount: number;
  readonly borrowingRate: number;
  readonly repaymentRate: number;
  readonly fixedInterestPeriodInYears: number;
  readonly includeOverview: boolean;
}
