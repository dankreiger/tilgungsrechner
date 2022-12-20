import type { NumericFormatProps } from 'react-number-format';
import type { SupportedCurrency } from './money-input.enums';

export type MoneyInputInnerProps = Readonly<NumericFormatProps> &
  Readonly<{
    onChange: (e: { target: { value: number | undefined } }) => void;
    id: SupportedCurrency;
  }>;

export type MoneyInputProps = Readonly<{
  /**
   * Die Währungssymbol anzuzeigen
   * @default 'EUR'
   */
  currency?: SupportedCurrency;
  onChange: MoneyInputInnerProps['onChange'];

  /**
   * Die Input-Label
   */
  label: string;

  /**
   * Der Input-Name
   */
  name: string;
  /**
   * Der Wert des Inputs
   */
  value?: number;
  /**
   * MUI variant
   * @default 'standard'
   */
  variant?: 'outlined' | 'standard' | 'filled';
}>;

export type CurrencyMapData = Readonly<{
  readonly symbol: '€' | '$';
  readonly thousandSeparator: '.' | ',';
  readonly decimalSeparator: '.' | ',';
}>;
