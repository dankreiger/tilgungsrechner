import { Box } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FC, forwardRef, useState } from 'react';

import {
  CurrencyMap,
  FormattedNumberInputProps,
  InnerComponentPropsObject,
  SupportedCurrency,
} from './internal';

export const FormattedNumberInput: FC<FormattedNumberInputProps> = forwardRef(
  (
    {
      currency = SupportedCurrency.EUR,
      onChange,
      label,
      value,
      name,
      errorMsg,
      isPercent,
      variant = 'standard',
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const showCurrencySymbol =
      (typeof value === 'number' || isFocused) && !isPercent;
    return (
      <Box ref={ref} sx={{ position: 'relative', width: '100%' }}>
        <TextField
          sx={{ width: '100%' }}
          label={label}
          focused={isFocused}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          name={name}
          id={currency}
          error={Boolean(errorMsg)}
          InputProps={
            {
              ...(showCurrencySymbol && {
                startAdornment: (
                  <InputAdornment position="start">
                    {CurrencyMap[currency].symbol}
                  </InputAdornment>
                ),
              }),
              value,
              name,
              onChange,
              ...InnerComponentPropsObject,
            } as TextFieldProps['InputProps'] & {
              onChange: FormattedNumberInputProps['onChange'];
            }
          }
          variant={variant}
        />
        {errorMsg && (
          <FormHelperText
            sx={{
              position: 'absolute',
              bottom: '-1.5rem',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {errorMsg}
          </FormHelperText>
        )}
      </Box>
    );
  }
);

export { SupportedCurrency } from './internal';
