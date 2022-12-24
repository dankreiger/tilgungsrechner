import type { NumericFormatProps } from 'react-number-format';
import type { SupportedCurrency } from './formatted-number-input.enums';

export type MoneyInputInnerProps = Readonly<NumericFormatProps> &
  Readonly<{
    onChange: (e: { target: { value: number | undefined } }) => void;
    id: SupportedCurrency;
  }>;

export type FormattedNumberInputProps = Readonly<{
  /**
   * Die Währungssymbol anzuzeigen
   * @default 'EUR'
   */
  currency?: SupportedCurrency;
  onChange: MoneyInputInnerProps['onChange'];

  /**
   * Nachricht, die angezeigt wird, wenn der Wert ungültig ist
   */
  errorMsg?: string | boolean;
  /**
   * True wenn der Input ein Prozentwert ist
   */
  isPercent?: boolean;

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
  value?: number | string;
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
