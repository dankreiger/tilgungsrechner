import type { DecoratorFn } from '@storybook/react';
import { de, en } from '../locales';

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

const withI18n: DecoratorFn = (Story, context) => (
  <Story
    globals={{
      ...context.globals,
      messages: {
        en: en,
        de: de,
      },
    }}
  />
);

// needs to be capitalized for rules of hooks
export const decorators = [withI18n];
