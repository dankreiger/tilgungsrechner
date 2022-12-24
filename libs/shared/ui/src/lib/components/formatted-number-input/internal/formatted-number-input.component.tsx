import type { InputBaseComponentProps } from '@mui/material';
import { ElementType, forwardRef, useCallback, useState } from 'react';
import { NumericFormat, OnValueChange } from 'react-number-format';
import { CurrencyMap } from './formatted-number-input.constants';
import {
  FormattedNumberInputProps,
  MoneyInputInnerProps,
} from './formatted-number-input.types';

const InnerComponent = forwardRef<
  FormattedNumberInputProps,
  MoneyInputInnerProps
>(function NumberFormatCustom(props, ref) {
  const [inputValue, setInputValue] = useState(props.value);
  const { onChange, name, id, value: _, ...other } = props;

  const handleOnValueChange: OnValueChange = useCallback(
    (values) => {
      setInputValue(values.floatValue);
      onChange({
        target: { value: values.floatValue },
      });
    },
    [onChange, setInputValue]
  );
  const isPercent = name?.toLowerCase().includes('rate'); // TODO: use isPercent prop
  return (
    <NumericFormat
      {...other}
      {...CurrencyMap[id]}
      id={id}
      value={inputValue}
      getInputRef={ref}
      allowNegative={false}
      decimalScale={isPercent ? 0 : 2}
      suffix={isPercent ? '%' : ''}
      fixedDecimalScale
      onValueChange={handleOnValueChange}
    />
  );
});

export const InnerComponentPropsObject = {
  inputComponent:
    InnerComponent as unknown as ElementType<InputBaseComponentProps>,
};
