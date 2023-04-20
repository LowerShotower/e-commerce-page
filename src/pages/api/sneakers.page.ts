import { NextApiResponse, NextApiRequest } from 'next'
import db from '@/../../db/db'
import { Sneaker } from '@/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    // console.log('asdfsf', db.sneakers)
    res.status(200).json(db.sneakers)
  }
}

// import { MongoClient, ServerApiVersion } from 'mongodb'

// // GET /api/sneakers
// const uri =
//   'mongodb+srv://noowaaypl:Mhms9hwu@cluster0.qgzhy4j.mongodb.net/sneakers?retryWrites=true&w=majority'

// export default function handler(req, res) {
//   const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   })
//   res.status(200).json({ name: 'John Doe' })
//   console.log('asfasdfasfadsfasdfasfdasfdasASDASDASDADASDADASDSADASDASDSAD')
//   // if (req.method === 'GET') {
//   //   const data = req.body
//   //   const { name, id } = data
//   //   try {
//   //     // Connect the client to the server	(optional starting in v4.7)
//   //     await client.connect()
//   //     // Send a ping to confirm a successful connection
//   //     await client.db('admin').command({ ping: 1 })
//   //     console.log(
//   //       'Pinged your deployment. You successfully connected to MongoDB!'
//   //     )
//   //     const db = client.db()

//   //     const sneakersCollection = await db
//   //       .collection('sneakers')
//   //       .find({})
//   //       .toArray()

//   //     res.status(200).json(sneakersCollection)
//   //   } finally {
//   //     // Ensures that the client will close when you finish/error
//   //     await client.close()
//   //   }
//   // }
// }
