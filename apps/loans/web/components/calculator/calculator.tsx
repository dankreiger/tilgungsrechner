import { useGetLoanRepaymentDetailsLazyQuery } from '@immo/loans/graphql';

import { FormattedNumberInput, Slider } from '@immo/shared/ui';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Snackbar from '@mui/material/Snackbar';
import Table from '@mui/material/Table';
import { useTranslations } from 'next-intl';
import { useCallback, useReducer, useState } from 'react';
import {
  ActionType,
  calculatorInitialState,
  calculatorReducer,
  isBetween,
} from './internal';

import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const Calculator = () => {
  const t = useTranslations('components.calculator');

  const [showErrorToast, setShowErrorToast] = useState(false);

  const [getLoanRepaymentDetails, queryResult] =
    useGetLoanRepaymentDetailsLazyQuery({
      onError: () => setShowErrorToast(true),
    });

  const [filter, dispatch] = useReducer(
    calculatorReducer,
    calculatorInitialState
  );

  const handleCalculate = useCallback(
    (e) => {
      e.preventDefault();
      getLoanRepaymentDetails({
        variables: {
          filter,
        },
      });
    },
    [getLoanRepaymentDetails, filter]
  );

  const { data: resultData, loading, error } = queryResult || {};

  const allFieldsValid =
    filter.loanAmount >= 0 &&
    isBetween({ value: filter.borrowingRate, min: 0, max: 100 }) &&
    isBetween({ value: filter.repaymentRate, min: 0, max: 100 }) &&
    Object.values(filter).every((x) => x ?? false);
  return (
    <Box>
      {loading && (
        <CircularProgress
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      <Snackbar
        open={showErrorToast}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        message={error?.message}
        onClose={() => setShowErrorToast(false)}
      />

      <Box
        component="form"
        onSubmit={handleCalculate}
        sx={{
          p: {
            xs: 2,
            sm: 5,
            md: 6,
          },
        }}
      >
        <Box sx={{ mb: 8 }}>
          <Typography textAlign="center" variant="h5">
            {t('title')}
          </Typography>
        </Box>

        {/* Input field grid */}
        <Box
          sx={{
            display: 'grid',
            gap: 8,
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
            },
            mb: 12,
          }}
        >
          <Box
            sx={{
              display: 'grid',
              BoxTemplateColumns: 'repeat(2, 1fr)',
              gap: 6,
            }}
          >
            {/* loanAmount */}
            <FormattedNumberInput
              currency={t('localizedCurrency')}
              label={t('loanAmount.label')}
              name="loanAmount"
              value={filter.loanAmount}
              errorMsg={filter.loanAmount < 0 && t('loanAmount.errorMsg')}
              onChange={(e) =>
                e.target.value >= 0 &&
                dispatch({
                  type: ActionType.SET_LOAN_AMOUNT,
                  payload: e.target.value,
                })
              }
            />
          </Box>

          {/* borrowingRate */}
          <Box>
            <FormattedNumberInput
              isPercent
              label={t('borrowingRate.label')}
              name="borrowingRate"
              value={filter.borrowingRate}
              errorMsg={
                filter.borrowingRate &&
                !isBetween({ value: filter.borrowingRate, min: 0, max: 100 }) &&
                t('borrowingRate.errorMsg')
              }
              onChange={(e) =>
                dispatch({
                  type: ActionType.SET_BORROWING_RATE,
                  payload: e.target.value,
                })
              }
            />
          </Box>

          {/* repaymentRate */}
          <Box>
            <FormattedNumberInput
              isPercent
              label={t('repaymentRate.label')}
              name="repaymentRate"
              value={filter.repaymentRate}
              onChange={(e) =>
                dispatch({
                  type: ActionType.SET_REPAYMENT_RATE,
                  payload: e.target.value,
                })
              }
              errorMsg={
                filter.repaymentRate &&
                !isBetween({ value: filter.repaymentRate, min: 0, max: 100 }) &&
                t('repaymentRate.errorMsg')
              }
            />
          </Box>
          {/* fixedInterestPeriodInYears */}
          <Box>
            <Slider
              min={1}
              max={30}
              label={t('fixedInterestPeriodInYears.label')}
              value={filter.fixedInterestPeriodInYears}
              onChange={(e, value: number) =>
                dispatch({
                  type: ActionType.SET_FIXED_INTEREST_PERIOD_IN_YEARS,
                  payload: value,
                })
              }
              errorMsg={
                !isBetween({
                  value: filter.fixedInterestPeriodInYears,
                  min: 0,
                  max: 100,
                }) && t('fixedInterestPeriodInYears.errorMsg')
              }
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            disabled={!allFieldsValid}
            size="large"
            variant="contained"
            type="submit"
          >
            {t('calculate')}
          </Button>
        </Box>
      </Box>
      {queryResult.data?.loanRepaymentDetails && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            p: {
              xs: 2,
              sm: 5,
              md: 6,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%',
              mb: 2,
            }}
          >
            <Typography variant="h5" mr={1}>
              {t('rate')}:{' '}
            </Typography>
            <Typography variant="h5" color={green[300]} ml={1}>
              {queryResult.data.loanRepaymentDetails.fixedMonthlyPayment.toFixed(
                2
              )}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%',
              mb: 2,
            }}
          >
            <Typography variant="h5" mr={1}>
              {t('remainingDebtAtEndOfPeriod')}:{' '}
            </Typography>
            <Typography variant="h5" color={green[300]} ml={1}>
              {queryResult.data.loanRepaymentDetails.remainingDebtAtEndOfFixedInterestPeriod.toFixed(
                2
              )}
            </Typography>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{t('monthNumber')}</TableCell>
                  <TableCell align="right">{t('yearNumber')}</TableCell>
                  <TableCell align="right">
                    {t('fixedMonthlyPayment')}
                  </TableCell>
                  <TableCell align="right">{t('interestAmount')}</TableCell>
                  <TableCell align="right">{t('amortizationAmount')}</TableCell>
                  <TableCell align="right">{t('remainingDebt')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resultData.loanRepaymentDetails.monthlyOverviewList?.map(
                  (row) => (
                    <TableRow
                      key={row.monthNumber}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.monthNumber}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.yearNumber}
                      </TableCell>
                      <TableCell align="right">
                        {row.fixedMonthlyPayment.toFixed(2)}
                      </TableCell>
                      <TableCell align="right">
                        {row.interestAmount.toFixed(2)}
                      </TableCell>
                      <TableCell align="right">
                        {row.amortizationAmount.toFixed(2)}
                      </TableCell>
                      <TableCell align="right">
                        {row.remainingDebt.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};
