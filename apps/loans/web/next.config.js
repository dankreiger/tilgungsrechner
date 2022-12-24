//@ts-check

/* Utils */

/**
 * @param  {...Function} fns
 * @returns {(config: import('@nrwl/next/plugins/with-nx').WithNxOptions) => import('next').NextConfig}
 */
const composePlugins =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

/* Plugins */

const { withNx } = require('@nrwl/next/plugins/with-nx');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const plugins = composePlugins(withPWA, withNx);

/****************************************************** */

module.exports = plugins({
  i18n: {
    locales: ['de-DE', 'en-US'],
    defaultLocale: 'de-DE',
  },
  nx: {
    svgr: true,
  },
});
