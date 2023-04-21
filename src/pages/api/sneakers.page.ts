import { NextApiResponse, NextApiRequest } from 'next'
import db from '@/../../db/db'
import { Sneaker } from '@/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Sneaker[]>
) {
  if (req.method === 'GET') {
    setTimeout(() => {
      res.status(200).json(db.sneakers)
    }, 500)
  }
}
