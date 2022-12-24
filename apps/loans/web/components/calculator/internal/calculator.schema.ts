import { z } from 'zod';

export const calculatorSchema = z.object({
  loanAmount: z.number().min(0),
  borrowingRate: z.number().min(0).max(100),
  repaymentRate: z.number().min(0).max(100),
  fixedInterestPeriodInYears: z.number().min(0).max(30),
});
