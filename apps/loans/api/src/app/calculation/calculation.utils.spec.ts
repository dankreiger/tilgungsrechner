import { pipe } from 'lodash/fp';
import { utils } from './calculation.utils';
import { CalculationInputDto } from './dto/calculation-input.dto';

const { getMonthlyPaymentDataFromInput } = utils;

const percentToDecimal = (percent: number) => percent / 100;

const yearlyToMonthly = (years: number) => years / 12;
const yearlyPercentToMonthlyDecimal = pipe(percentToDecimal, yearlyToMonthly);

describe('calculation utils', () => {
  describe('percentToDecimal', () => {
    it('should convert a percentage to a decimal', () => {
      expect(percentToDecimal(50)).toBe(0.5);
      expect(percentToDecimal(25)).toBe(0.25);
      expect(percentToDecimal(75)).toBe(0.75);
    });
  });

  describe('yearlyToMonthly', () => {
    it('should convert a number of years to a number of months', () => {
      expect(yearlyToMonthly(1)).toBe(1 / 12);
      expect(yearlyToMonthly(2)).toBe(2 / 12);
      expect(yearlyToMonthly(5)).toBe(5 / 12);
    });
  });

  describe('yearlyPercentToMonthlyDecimal', () => {
    it('should convert a percentage per year to a decimal per month', () => {
      expect(yearlyPercentToMonthlyDecimal(10)).toBe(10 / 100 / 12);
      expect(yearlyPercentToMonthlyDecimal(25)).toBe(25 / 100 / 12);
      expect(yearlyPercentToMonthlyDecimal(50)).toBe(50 / 100 / 12);
    });
  });

  describe('getMonthlyPaymentDataFromInput', () => {
    it('should return the correct monthly payment data from the input', () => {
      const input: CalculationInputDto = {
        loanAmount: 100000,
        fixedInterestPeriodInYears: 5,
        borrowingRate: 4,
        repaymentRate: 2,
      };
      const expectedOutput = {
        fixedInterestPeriodInMonths: 5 * 12,
        fixedMonthlyPayment: (4 / 100 / 12) * 100000 + (2 / 100 / 12) * 100000,
        loanAmount: 100000,
        monthlyInterestDecimal: 4 / 100 / 12,
      };
      expect(getMonthlyPaymentDataFromInput(input)).toEqual(expectedOutput);
    });
  });
});
