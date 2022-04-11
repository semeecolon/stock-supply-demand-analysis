import type { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import MyHeader from '@/components/header';
import MyFooter from '@/components/footer';

type Props = {
  children?: ReactElement;
  title?: string;
  keywords?: string;
  description?: string;
};
export default function LayoutDefault({ children, title, keywords, description }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <MyHeader />
      Default 레이아웃
      <main className="">{children}</main>
      <MyFooter />
    </>
  );
}

//기본 props 지정
LayoutDefault.defaultProps = {
  description: 'Default description',
  keywords: 'Default, keywords',
  title: 'Default Layout Title'
};
