import { SupportedCurrency } from './money-input.enums';
import { CurrencyMapData } from './money-input.types';

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
