import { ActionType } from './calculator.action-types';
import { CalculatorReducer } from './calculator.types';

export const calculatorReducer: CalculatorReducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_LOAN_AMOUNT:
      return { ...state, loanAmount: action.payload };
    default:
      throw new Error('Invalid action type');
  }
};
