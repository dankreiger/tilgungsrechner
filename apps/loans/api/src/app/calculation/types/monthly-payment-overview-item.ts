export type MonthlyPaymentOverviewItem = {
  readonly monthNumber: number;
  readonly yearNumber: number;
  readonly remainingDebt: number;
  readonly fixedMonthlyPayment: number;
  readonly interestAmount: number;
  readonly amortizationAmount: number;
};
