// this uses Intl.NumberFormat
// it is than the current <FormattedNumberInput />, but still a work in progress
import Box from '@mui/material/Box';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { ChangeEvent, useMemo, useState } from 'react';

export const MoneyInputAlt = ({
  locale = 'de-DE',
  ...props
}: TextFieldProps & {
  locale: string;
}) => {
  const [inputValue, setInputValue] = useState<number>();
  const [isFocused, setIsFocused] = useState(false);
  const [invalidInput, setInvalidInput] = useState<boolean>(false);

  const [formattedInputValue, setFormattedInputValue] = useState<string>();

  const numberFormat = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'EUR',
      }),
    [locale]
  );

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const changedValue = parseFloat(e.target.value);

    if (isNaN(changedValue)) {
      setInvalidInput(true);
      return;
    }
    setInvalidInput(false);

    setInputValue(() => {
      setFormattedInputValue(numberFormat.format(changedValue));
      return changedValue;
    });
  };
  return (
    <Box sx={{ position: 'relative' }}>
      <TextField
        // {...props}
        error={invalidInput || props.error}
        name="test"
        value={formattedInputValue}
        focused={isFocused}
        style={{ zIndex: 0, pointerEvents: 'none' }}
      />
      <TextField
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        error={invalidInput || props.error}
        name="test"
        type="number"
        value={inputValue}
        onChange={handleOnChange}
        sx={{
          opacity: 0,
          position: 'absolute',
          left: 0,
          zIndex: 100,
        }}
      />
    </Box>
  );
};
