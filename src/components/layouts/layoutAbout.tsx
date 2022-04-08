import type { ReactElement, ReactNode } from 'react';
import Head from 'next/head';

export default function LayoutAbout({
  children,
  title
}: {
  children: ReactElement;
  title: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="text-center text-yellow-800">
        <h1 className="text-3xl font-bold underline">{title}</h1>
      </div>
      <main className="">{children}</main>
    </>
  );
}
