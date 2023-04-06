// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import event from '../../../tables/event'
import connectDB from '@/middlayer/mongoose'

type Data = {
    success?: string;
    error?:string;
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    if (req.method == 'POST') {
        const getEvent = await event.find({ "eventDate": req.body.eventDate });
        if(getEvent.length < 5){
        var addEvent = new event({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            eventType: req.body.eventType,
            eventdesc: req.body.eventdesc,
            eventDate: req.body.eventDate,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            totalGuest : req.body.totalGuest
        })
        await addEvent.save();
        res.status(200).json({ success: 'success' })
    }
    else{
        res.status(400).json({ error: 'error' })
    }
    }
    else{
        res.status(400).json({ error: 'error' })

    }
}
export default connectDB(handler)
