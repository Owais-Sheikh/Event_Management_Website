// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/middlayer/mongoose'
import event from '@/tables/event'

type Data = {
  success?: string;
  error ?: string;
}

const handler = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
)=> {
    if(req.method == 'POST'){
        await event.deleteOne({'uniqueId' : req.body.uniqueId})
        res.status(200).json({ success: 'success' })
    }
    else{
        res.status(200).json({ error: 'error' })

    }
}
export default connectDB(handler)
