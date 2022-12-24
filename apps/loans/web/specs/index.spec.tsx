import { Locale } from '@immo/loans/graphql';
import Index from '../pages/index';
import { renderWithProviders } from './utils';

jest.mock('next-intl', () => ({
  useTranslations: () => jest.fn(),
  NextIntlProvider: (children) => <>{children}</>,
}));

jest.mock('@apollo/client', () => ({
  ApolloProvider: (children) => <>{children}</>,
  ApolloClient: jest.fn(),
  gql: jest.fn(),
  InMemoryCache: jest.fn(),
}));

const mockLocaleDict = Locale;
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    asPath: '/',
    locale: mockLocaleDict['de'],
    locales: Object.values(mockLocaleDict),
    pathname: '/',
    push: jest.fn(),
    query: {},
  })),
}));

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProviders(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
