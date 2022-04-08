// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// import useSWR from 'swr';

type Data = {
  desc: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // useSWR('/api/swr', async () => {});
  res.status(200).json({ desc: 'next api route 👏' });
}
