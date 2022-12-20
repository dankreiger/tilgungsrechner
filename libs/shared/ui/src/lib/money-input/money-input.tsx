import { InputAdornment } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FC, useState } from 'react';

import {
  CurrencyMap,
  InnerComponentPropsObject,
  MoneyInputProps,
  SupportedCurrency,
} from './internal';

export const MoneyInput: FC<MoneyInputProps> = ({
  currency = SupportedCurrency.EUR,
  onChange,
  label,
  value,
  name,
  variant = 'standard',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextField
      label={label}
      focused={isFocused}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      name={name}
      id={currency}
      InputProps={
        {
          ...((value || isFocused) && {
            startAdornment: (
              <InputAdornment position="start">
                {CurrencyMap[currency].symbol}
              </InputAdornment>
            ),
          }),
          value: value,
          name,
          onChange,
          ...InnerComponentPropsObject,
        } as TextFieldProps['InputProps'] & {
          onChange: MoneyInputProps['onChange'];
        }
      }
      variant={variant}
    />
  );
};

export { SupportedCurrency } from './internal';
