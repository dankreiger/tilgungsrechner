import { useGetLoanRepaymentDetailsLazyQuery } from '@immo/loans/graphql';
import { SubmitHandler } from 'react-hook-form';

import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { useCallback, useState } from 'react';

import { Spinner } from '@immo/shared/ui';
import { CalculatorForm, CalculatorSchema } from './internal';
import { CalculatorTable } from './internal/calculator-table';

export const Calculator = () => {
  const [showErrorToast, setShowErrorToast] = useState(false);

  const [getLoanRepaymentDetails, queryResult] =
    useGetLoanRepaymentDetailsLazyQuery({
      onError: () => setShowErrorToast(true),
    });

  const onSubmit: SubmitHandler<CalculatorSchema> = useCallback(
    (filter) =>
      getLoanRepaymentDetails({
        variables: {
          filter,
        },
      }),
    [getLoanRepaymentDetails]
  );

  const { data: resultData, loading, error } = queryResult || {};

  return (
    <Box>
      <Spinner show={loading} />
      <Snackbar
        open={showErrorToast}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        message={error?.message}
        onClose={() => setShowErrorToast(false)}
      />

      <CalculatorForm onSubmit={onSubmit} />

      {resultData?.loanRepaymentDetails && (
        <CalculatorTable
          loanRepaymentDetails={resultData.loanRepaymentDetails}
        />
      )}
    </Box>
  );
};
