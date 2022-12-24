export type MonthlyPaymentOverviewItem = {
  readonly monthNumber: number;
  readonly stats: {
    readonly remainingDebt: number;
    readonly fixedMonthlyPayment: number;
    readonly interestAmount: number;
    readonly amortizationAmount: number;
  };
};
