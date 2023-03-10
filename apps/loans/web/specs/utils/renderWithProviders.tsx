import { Locale } from '@immo/loans/graphql';
import { ThemeProvider } from '@mui/material/styles';
import { render } from '@testing-library/react';
import { NextIntlProvider } from 'next-intl';
import { compose } from 'ramda';
import { messages } from '../../public/locales';
import { theme } from '../../utils';

const Provider = compose(
  (p: object) => <ThemeProvider {...p} theme={theme} />,
  (p) => <NextIntlProvider {...p} locale={Locale.de_DE} messages={messages} />
);

export function renderWithProviders(ui, { ...renderOptions } = {}) {
  const Wrapper = ({ children }) => {
    return <Provider>{children}</Provider>;
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}
