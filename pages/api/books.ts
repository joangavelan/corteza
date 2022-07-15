import type { NextApiRequest, NextApiResponse } from 'next'
import Books from '@data/books.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(Books)
}
