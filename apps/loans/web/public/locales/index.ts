import { Locale } from '@immo/loans/graphql';
import de_DE from './de-DE.json';
import en_US from './en-US.json';

// set to default language
type DefaultLocale = typeof de_DE;

export const messages: Record<keyof typeof Locale, DefaultLocale> = {
  de_DE,
  en_US,
};
