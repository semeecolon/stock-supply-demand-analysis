import type { ReactElement, ReactNode } from 'react';
import LayoutAbout from '@/layouts/layoutAbout';

export default function About() {
  return <h1 className="text-3xl font-bold underline">Hello next world!</h1>;
}

About.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAbout title="About 레이아웃">{page}</LayoutAbout>;
};
