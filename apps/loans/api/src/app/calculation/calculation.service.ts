import { utils } from './calculation.utils';
import type { CalculationInputDto } from './dto/calculation-input.dto';
import type { MonthlyPaymentDetails } from './types';

export class CalculationService {
  calculateMonthlyPaymentDetails(
    input: CalculationInputDto
  ): MonthlyPaymentDetails {
    const monthlyPaymentData = utils.getMonthlyPaymentDataFromInput(input);

    return {
      fixedMonthlyPayment: monthlyPaymentData.fixedMonthlyPayment,
      ...(input.includeOverview &&
        utils.compileMonthlyPaymentSummary(monthlyPaymentData)),
    };
  }
}
