import Index from '../pages/index';
import { SupportedLocales } from '../public/locales';
import { renderWithProviders } from './utils';

jest.mock('next-intl', () => ({
  useTranslations: () => jest.fn(),
  NextIntlProvider: (children) => <>{children}</>,
}));

const mockLocaleDict = SupportedLocales;
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    asPath: '/',
    locale: mockLocaleDict['de-DE'],
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
