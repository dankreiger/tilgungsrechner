import { FC, useMemo } from 'react';

import { Locale } from '@immo/loans/graphql';

import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import { green, red } from '@mui/material/colors';
import Table from '@mui/material/Table';
import { useLocale, useTranslations } from 'next-intl';

import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import type { CalculatorTableProps } from './calculator.types';

export const CalculatorTable: FC<CalculatorTableProps> = ({
  loanRepaymentDetails: {
    monthlyOverviewList,
    fixedMonthlyPayment,
    remainingDebtAtEndOfFixedInterestPeriod,
  },
}) => {
  const t = useTranslations('components.calculator');

  const locale = useLocale() as typeof Locale[keyof typeof Locale];

  const { intlCurrency, intlDate } = useMemo(
    () => ({
      intlCurrency: Intl.NumberFormat(locale, {
        currency: t('localizedCurrency'),
        style: 'currency',
      }),
      intlDate: Intl.DateTimeFormat(locale),
    }),
    [locale, t]
  );

  return (
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
          {intlCurrency.format(fixedMonthlyPayment)}
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
        <Typography
          variant="h5"
          color={
            remainingDebtAtEndOfFixedInterestPeriod > 0 ? red[300] : green[300]
          }
          ml={1}
        >
          {intlCurrency.format(remainingDebtAtEndOfFixedInterestPeriod)}
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table stickyHeader sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>{t('monthNumber')}</TableCell>

              {Object.keys(monthlyOverviewList[0].stats).map(
                (k) =>
                  k !== '__typename' && (
                    <TableCell key={k} align="right">
                      {t(k as keyof typeof t)}
                    </TableCell>
                  )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {monthlyOverviewList?.map(({ monthNumber, stats }) => (
              <TableRow
                key={monthNumber}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {intlDate.format(
                    new Date().setMonth(new Date().getMonth() + monthNumber)
                  )}
                </TableCell>

                {Object.entries(stats).map(
                  ([k, v]) =>
                    v !== 'FormattedMonthlyPaymentOverviewStats' && (
                      <TableCell key={k} align="right">
                        {intlCurrency.format(v)}
                      </TableCell>
                    )
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
