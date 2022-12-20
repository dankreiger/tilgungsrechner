import { utils } from './calculation.utils';
import type { CalculationInputDto } from './dto/calculation-input.dto';
import type { MonthlyPaymentDetails } from './types';

export class CalculationService {
  calculateMonthlyPaymentDetails(
    input: CalculationInputDto
  ): MonthlyPaymentDetails {
    const { includeOverview } = input;

    const monthlyPaymentData = utils.getMonthlyPaymentDataFromInput(input);

    return {
      fixedMonthlyPayment: monthlyPaymentData.fixedMonthlyPayment,
      ...(includeOverview &&
        utils.compileMonthlyPaymentSummary(monthlyPaymentData)),
    };
  }
}
