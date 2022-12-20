import type { Reducer } from 'react';
import type { ActionType } from './calculator.action-types';

type CalculatorAction = {
  type: typeof ActionType.SET_LOAN_AMOUNT;
  payload: number;
};

type CalculatorState = {
  loanAmount: number | undefined;
};

export type CalculatorReducer = Reducer<CalculatorState, CalculatorAction>;
