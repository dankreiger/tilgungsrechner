import { Header } from '@immo/shared/ui';
import { BarChart } from '@mui/icons-material';
import { Container } from '@mui/material';
import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import { useLangSettings } from '../hooks';

interface PageProps {
  children: ReactNode;
  brandText: string;
  title: string;
}

export const Page: FC<PageProps> = ({ brandText, children, title }) => {
  const { menu } = useLangSettings();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header brandText={brandText} logo={<BarChart />} headerRight={menu} />

      <main>
        <Container maxWidth="sm">{children}</Container>
      </main>
    </>
  );
};
