import { NextApiResponse, NextApiRequest } from 'next'
import db from '@/../../db/db'
import { Filters } from '@/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Partial<Filters>>
) {
  if (req.method === 'GET') {
    setTimeout(() => {
      res.status(200).json(db.filters)
    }, 500)
  }
}
