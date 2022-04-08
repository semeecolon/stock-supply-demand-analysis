import '../../styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import LayoutDefault from '@/layouts/layoutDefault';

// type GetLayout = (page: ReactNode) => ReactNode;
// const layoutDefault: GetLayout = (page: ReactNode): ReactNode => page;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <>
      <LayoutDefault>{getLayout(<Component {...pageProps} />)}</LayoutDefault>
    </>
  );
}

// export default MyApp;
