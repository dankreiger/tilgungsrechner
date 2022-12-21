import { SupportedCurrency } from './formatted-number-input.enums';
import { CurrencyMapData } from './formatted-number-input.types';

export const CurrencyMap: Record<SupportedCurrency, CurrencyMapData> = {
  [SupportedCurrency.EUR]: {
    symbol: '€',
    thousandSeparator: '.',
    decimalSeparator: ',',
  },
  [SupportedCurrency.USD]: {
    symbol: '$',
    thousandSeparator: ',',
    decimalSeparator: '.',
  },
} as const;
