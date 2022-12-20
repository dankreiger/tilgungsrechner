/* eslint-disable */
export default {
  displayName: 'loans-web',
  preset: '../../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleNameMapper: {
    '@next/font/(.*)': require.resolve(
      'next/dist/build/jest/__mocks__/nextFontMock.js'
    ),
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/apps/loans/web',
};
