import { utils } from './calculation.utils';
import type { CalculationInputDto } from './dto/calculation-input.dto';
import type { MonthlyPaymentDetails } from './types';

export class CalculationService {
  calculateMonthlyPaymentDetails(
    filter: CalculationInputDto
  ): MonthlyPaymentDetails {
    const monthlyPaymentData = utils.getMonthlyPaymentDataFromInput(filter);
    return {
      fixedMonthlyPayment: monthlyPaymentData.fixedMonthlyPayment,
      ...utils.compileMonthlyPaymentSummary(monthlyPaymentData),
    };
  }
}
