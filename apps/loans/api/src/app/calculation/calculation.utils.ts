import { pipe } from 'lodash/fp';
import { CalculationInputDto } from './dto/calculation-input.dto';
import { MonthlyPaymentOverviewItem } from './types/monthly-payment-overview-item';

const percentToDecimal = (percent: number) => percent / 100;

const yearlyToMonthly = (years: number) => years / 12;
const yearlyPercentToMonthlyDecimal = pipe(percentToDecimal, yearlyToMonthly);

const getMonthlyPaymentDataFromInput = (filter: CalculationInputDto) => {
  const monthlyInterestDecimal = yearlyPercentToMonthlyDecimal(
    filter.borrowingRate
  );
  const monthlyAmortizationDecimal = yearlyPercentToMonthlyDecimal(
    filter.repaymentRate
  );

  return {
    fixedInterestPeriodInMonths: filter.fixedInterestPeriodInYears * 12,
    fixedMonthlyPayment:
      monthlyInterestDecimal * filter.loanAmount +
      monthlyAmortizationDecimal * filter.loanAmount,
    loanAmount: filter.loanAmount,
    monthlyInterestDecimal,
  };
};

const compileMonthlyPaymentSummary = (opts: {
  fixedInterestPeriodInMonths: number;
  fixedMonthlyPayment: number;
  monthlyInterestDecimal: number;
  loanAmount: number;
}): {
  remainingDebtAtEndOfFixedInterestPeriod: number;
  monthlyOverviewList: MonthlyPaymentOverviewItem[];
} => {
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

      const interest = remainingDebt * monthlyInterestDecimal;
      const amortization = fixedMonthlyPayment - interest;

      return {
        remainingDebtAtEndOfFixedInterestPeriod: remainingDebt - amortization,
        monthlyOverviewList: [
          ...monthlyOverviewList,
          {
            monthNumber,
            stats: {
              fixedMonthlyPayment,
              interestAmount: interest,
              amortizationAmount: amortization,
              remainingDebt: remainingDebt - amortization,
            },
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
