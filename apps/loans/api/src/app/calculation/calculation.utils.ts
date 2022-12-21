import { pipe } from 'lodash/fp';
import { CalculationInputDto } from './dto/calculation-input.dto';
import { MonthlyPaymentOverviewItem } from './types/monthly-payment-overview-item';

const percentToDecimal = (percent: number) => percent / 100;

const yearlyToMonthly = (years: number) => years / 12;
const yearlyPercentToMonthlyDecimal = pipe(percentToDecimal, yearlyToMonthly);

const getMonthlyPaymentDataFromInput = (input: CalculationInputDto) => {
  const monthlyInterestDecimal = yearlyPercentToMonthlyDecimal(
    input.borrowingRate
  );
  const monthlyAmortizationDecimal = yearlyPercentToMonthlyDecimal(
    input.repaymentRate
  );

  return {
    fixedInterestPeriodInMonths: input.fixedInterestPeriodInYears * 12,
    fixedMonthlyPayment:
      monthlyInterestDecimal * input.loanAmount +
      monthlyAmortizationDecimal * input.loanAmount,
    loanAmount: input.loanAmount,
    monthlyInterestDecimal,
  };
};

type MonthlyPaymentSummary = {
  remainingDebtAtEndOfFixedInterestPeriod: number;
  monthlyOverviewList: MonthlyPaymentOverviewItem[];
};

const compileMonthlyPaymentSummary = (opts: {
  fixedInterestPeriodInMonths: number;
  fixedMonthlyPayment: number;
  monthlyInterestDecimal: number;
  loanAmount: number;
}): MonthlyPaymentSummary => {
  const {
    fixedInterestPeriodInMonths,
    fixedMonthlyPayment,
    monthlyInterestDecimal,
    loanAmount,
  } = opts;

  return [...Array(fixedInterestPeriodInMonths).keys()].reduce(
    (
      {
        remainingDebtAtEndOfFixedInterestPeriod: remainingDebt,
        monthlyOverviewList,
      },
      idx
    ) => {
      const monthNumber = idx + 1;
      const yearNumber = Math.ceil(monthNumber / 12);

      const interest = remainingDebt * monthlyInterestDecimal;
      const amortization = fixedMonthlyPayment - interest;

      return {
        remainingDebtAtEndOfFixedInterestPeriod: remainingDebt - amortization,
        monthlyOverviewList: [
          ...monthlyOverviewList,
          {
            monthNumber: monthNumber,
            yearNumber: yearNumber,
            remainingDebt: remainingDebt - amortization,
            fixedMonthlyPayment: fixedMonthlyPayment,
            interestAmount: interest,
            amortizationAmount: amortization,
          },
        ],
      };
    },
    {
      remainingDebtAtEndOfFixedInterestPeriod: loanAmount,
      monthlyOverviewList: [] as MonthlyPaymentOverviewItem[],
    }
  );
};

/******************************************** */

export const utils = {
  getMonthlyPaymentDataFromInput,
  compileMonthlyPaymentSummary,
};
