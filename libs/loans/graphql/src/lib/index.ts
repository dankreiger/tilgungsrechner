import { Country, Lang } from './react';

export * from './react';

export const Locale = {
  de_DE: `${Lang.De}-${Country.De}`,
  en_US: `${Lang.En}-${Country.Us}`,
} as const;
