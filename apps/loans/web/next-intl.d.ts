// import the original type declarations
import 'next-intl';
import type { Formats, TranslationValues } from 'next-intl';
import DefaultLocale from './public/locales/de-DE.json';
// helper types
type Join<T extends string[], D extends string> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string
    ? `${F}${D}${Join<Extract<R, string[]>, D>}`
    : never
  : string;

type PathsToStringProps<T> = T extends string
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
    }[Extract<keyof T, string>];

// module helpers
type NamespaceKeysL2<K, K2> = `${K}.${K2}` | K;
type NamespacePathsL2<K, K2> = K2 extends undefined
  ? typeof DefaultLocale[K]
  : typeof DefaultLocale[K][K2];

// module
declare module 'next-intl' {
  export function useTranslations<
    K extends keyof typeof DefaultLocale,
    K2 extends keyof typeof DefaultLocale[K] = undefined
  >(
    namespace: NamespaceKeysL2<K, K2>
  ): <R extends string>(
    key: Join<PathsToStringProps<NamespacePathsL2<K, K2>>, '.'>,
    values?: TranslationValues,
    formats?: Partial<Formats>
  ) => R;
}
