import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { calculatorSchema } from './calculator.schema';

import { GetLoanRepaymentDetailsQuery } from '@immo/loans/graphql';

export type CalculatorSchema = Required<z.infer<typeof calculatorSchema>>;
export interface CalculatorTableProps {
  loanRepaymentDetails: GetLoanRepaymentDetailsQuery['loanRepaymentDetails'];
}

export interface CalculatorFormProps {
  onSubmit: SubmitHandler<CalculatorSchema>;
}
