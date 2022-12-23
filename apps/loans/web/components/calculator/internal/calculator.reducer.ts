import { ActionType } from './calculator.action-types';
import { CalculatorReducer } from './calculator.types';

export const calculatorReducer: CalculatorReducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_LOAN_AMOUNT:
      return {
        ...state,
        loanAmount: action.payload,
      };
    case ActionType.SET_BORROWING_RATE:
      return {
        ...state,
        borrowingRate: action.payload,
      };
    case ActionType.SET_REPAYMENT_RATE:
      return {
        ...state,
        repaymentRate: action.payload,
      };
    case ActionType.SET_FIXED_INTEREST_PERIOD_IN_YEARS:
      return {
        ...state,
        fixedInterestPeriodInYears: action.payload,
      };

    default:
      throw new Error('Invalid action type');
  }
};
