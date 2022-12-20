import { MoneyInput } from '@immo/shared/ui';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useTranslations } from 'next-intl';
import { useCallback, useReducer } from 'react';
import { useApi } from '../../providers';
import { ActionType, calculatorReducer } from './internal';

export const Calculator = () => {
  const t = useTranslations('components.calculator');
  const { callApi, data, loading, error } = useApi();
  const [state, dispatch] = useReducer(calculatorReducer, {
    loanAmount: undefined,
  });

  const handleCalculate = useCallback(async () => {
    await callApi({
      apiRoute: 'calculation/monthly-payment-details',
      query: {
        loanAmount: state.loanAmount,
        fixedInterestPeriodInYears: 5,
        yearlyAmortizationPercent: 3,
        yearlyInterestPercent: 2,
        includeOverview: true,
      },
    });
  }, [callApi, state.loanAmount]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Typography variant="h5" component="div">
              {t('title')}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {t('subtitle')}
            </Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <MoneyInput
              currency={t('localizedCurrency')}
              onChange={(e) =>
                dispatch({
                  type: ActionType.SET_LOAN_AMOUNT,
                  payload: e.target.value,
                })
              }
              label={t('loanAmount.label')}
              name="loanAmount"
              value={state.loanAmount}
            />
          </Box>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button size="large" type="submit" onClick={handleCalculate}>
            Calculate
          </Button>
        </CardActions>
      </Card>
      <Card>{JSON.stringify(data, null, 4)}</Card>
    </form>
  );
};
