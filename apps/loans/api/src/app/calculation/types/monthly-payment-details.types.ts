import type { MonthlyPaymentOverviewItem } from './monthly-payment-overview-item';

export type MonthlyPaymentDetails = {
  readonly fixedMonthlyPayment: number;
  readonly remainingDebtAtEndOfFixedInterestPeriod: number;
  readonly monthlyOverviewList: MonthlyPaymentOverviewItem[];
};
