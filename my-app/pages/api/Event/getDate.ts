import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/middlayer/mongoose'
import event from '@/tables/event'

type Data = {
    success?: string;
    error?: string;
}
const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    if (req.method == 'POST') {
        const getEvent = await event.find({ "email": req.body.eventDate });
        res.status(400).json({ success: 'John Doe' })

          }      
    else{

        res.status(400).json({ error: 'John Doe' })
    }

          }


export default connectDB(handler)
