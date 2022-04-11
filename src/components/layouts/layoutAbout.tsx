import type { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

type Props = {
  children?: ReactElement;
  title?: string;
};

// export default function LayoutAbout({ children, title }: Props) {
//   return (
//     <>
//       <Head>
//         <title>{title}</title>
//       </Head>
//       <div className="text-center text-yellow-800">
//         <h1 className="text-3xl font-bold underline">{title}</h1>
//       </div>
//       <main className="">{children}</main>
//     </>
//   );
// }

const LayoutAbout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="text-center text-yellow-800">
      <h1 className="text-2xl font-bold underline">{title}</h1>
    </div>
    <main className="">{children}</main>
  </div>
);

export default LayoutAbout;
