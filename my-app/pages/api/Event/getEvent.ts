// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/middlayer/mongoose'
import event from '@/tables/event'

type Data = {
    success?: string;
    error?: string;
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    if (req.method == 'POST') {
        let getEvent:any = [];
        getEvent = await event.find({ "email": req.body.email });
        if (getEvent) {
            if (req.body.email == getEvent.email) {
                res.status(200).json({ success: 'success', eventType: event.email })
            }
            else{
                res.status(400).json({ error: ' Doe' })

            }
        }
        else{

            res.status(400).json({ error: 'John Doe' })
        }
    }
}

export default connectDB(handler)
