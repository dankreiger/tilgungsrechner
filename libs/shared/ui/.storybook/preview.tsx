import type { DecoratorFn } from '@storybook/react';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { de, en } from '../locales';

i18n
  .use(Backend) // lazy loads translations from /public/locales
  .use(LanguageDetector) // detect user language
  .init({
    interpolation: {
      escapeValue: false,
    },
    debug: true,
    resources: {
      en: en,
      de: de,
    },
  });
export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'de', title: 'Deutsch' },
        { value: 'en', title: 'English' },
      ],
      default: 'de',
      showName: true,
    },
  },
};

const useI18nLanguage = (locale?: string) =>
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

const withI18next =
  (hook: typeof useI18nLanguage): DecoratorFn =>
  (Story, context) => {
    hook(context.globals.locale);
    return (
      <Suspense fallback={<div>loading translations...</div>}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </Suspense>
    );
  };

// needs to be capitalized for rules of hooks
export const decorators = [withI18next(useI18nLanguage)];
