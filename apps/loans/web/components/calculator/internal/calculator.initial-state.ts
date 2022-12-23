import type { CalculationState } from '@immo/loans/types';

export const calculatorInitialState: CalculationState = {
  loanAmount: undefined,
  borrowingRate: undefined,
  repaymentRate: undefined,
  fixedInterestPeriodInYears: 1,
};
