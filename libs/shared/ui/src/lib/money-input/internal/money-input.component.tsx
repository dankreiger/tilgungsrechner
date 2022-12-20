import { InputBaseComponentProps } from '@mui/material';
import { ElementType, forwardRef, useCallback, useState } from 'react';
import { NumericFormat, OnValueChange } from 'react-number-format';
import { CurrencyMap } from './money-input.constants';
import { MoneyInputInnerProps, MoneyInputProps } from './money-input.types';

const InnerComponent = forwardRef<MoneyInputProps, MoneyInputInnerProps>(
  function NumberFormatCustom(props, ref) {
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
    return (
      <NumericFormat
        {...other}
        {...CurrencyMap[id]}
        id={id}
        value={inputValue}
        getInputRef={ref}
        allowNegative={false}
        decimalScale={2}
        fixedDecimalScale
        onValueChange={handleOnValueChange}
      />
    );
  }
);

export const InnerComponentPropsObject = {
  inputComponent:
    InnerComponent as unknown as ElementType<InputBaseComponentProps>,
};
