import { CalculationState } from '@immo/loans/types';
import type { Reducer } from 'react';
import type { ActionType } from './calculator.action-types';

type CalculatorAction =
  | {
      type:
        | typeof ActionType.SET_LOAN_AMOUNT
        | typeof ActionType.SET_BORROWING_RATE
        | typeof ActionType.SET_REPAYMENT_RATE
        | typeof ActionType.SET_FIXED_INTEREST_PERIOD_IN_YEARS;
      payload: number;
    }
  | {
      type: typeof ActionType.SET_PAYOUT_DATE;
      payload: Date | undefined;
    };

export type CalculatorReducer = Reducer<CalculationState, CalculatorAction>;
