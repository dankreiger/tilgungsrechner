import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { calculatorSchema } from './calculator.schema';

import { FormattedNumberInput, Slider } from '@immo/shared/ui';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import type { CalculatorFormProps, CalculatorSchema } from './calculator.types';

export const CalculatorForm: FC<CalculatorFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CalculatorSchema>({
    resolver: zodResolver(calculatorSchema),
  });

  const t = useTranslations('components.calculator');
  return (
    <Box
      component="form"
      sx={{
        p: {
          xs: 2,
          sm: 5,
          md: 6,
        },
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box
        sx={{
          display: 'grid',
          gap: 8,
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 1fr',
          },
        }}
      >
        <Controller
          name="loanAmount"
          control={control}
          render={({ field }) => (
            <FormattedNumberInput
              {...field}
              label={t('loanAmount.label')}
              currency={t('localizedCurrency')}
              errorMsg={errors.loanAmount?.message}
            />
          )}
        />

        <Controller
          name="borrowingRate"
          control={control}
          render={({ field }) => (
            <FormattedNumberInput
              {...field}
              label={t('borrowingRate.label', { min: 0, max: 100 })}
              errorMsg={errors.borrowingRate?.message}
              isPercent
            />
          )}
        />
        <Controller
          name="repaymentRate"
          control={control}
          render={({ field }) => (
            <FormattedNumberInput
              {...field}
              label={t('repaymentRate.label', { min: 0, max: 100 })}
              errorMsg={errors.repaymentRate?.message}
              isPercent
            />
          )}
        />
        <Controller
          defaultValue={1}
          name="fixedInterestPeriodInYears"
          control={control}
          render={({ field }) => (
            <Slider
              {...field}
              min={1}
              max={30}
              errorMsg={errors.fixedInterestPeriodInYears?.message}
              label={t('fixedInterestPeriodInYears.label', {
                min: 1,
                max: 30,
              })}
              onChange={(_, value, s) => {
                field.onChange(value);
              }}
            />
          )}
        />
      </Box>

      <Box sx={{ width: '100%', textAlign: 'center', mt: 5 }}>
        <Button type="submit" size="large" variant="contained">
          {t('calculate')}
        </Button>
      </Box>
    </Box>
  );
};
