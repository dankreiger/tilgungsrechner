import de_DE from './de-DE.json';
import en_US from './en-US.json';

// set to default language
type DefaultLocale = typeof de_DE;

export enum SupportedLocales {
  'de-DE' = 'de-DE',
  'en-US' = 'en-US',
}

export const messages: Record<SupportedLocales, DefaultLocale> = {
  'de-DE': de_DE,
  'en-US': en_US,
};
