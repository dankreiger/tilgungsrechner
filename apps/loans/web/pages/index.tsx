import type { GetServerSideProps } from 'next';
import { useTranslations } from 'next-intl';
import { Calculator } from '../components';
import { Page } from '../layouts';

export function Index() {
  const t = useTranslations('pages.index');

  return (
    <Page brandText={t('brandText')} title={t('title')}>
      <Calculator />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale,
      messages: (await import(`../public/locales/${locale}.json`)).default,
    } as const,
  };
};

export default Index;
