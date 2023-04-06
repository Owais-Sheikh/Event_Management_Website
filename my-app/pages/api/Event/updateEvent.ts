import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/middlayer/mongoose'
import event from '@/tables/event'

type Data = {
  success?: string;
  error?:string;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
)=> {
    if(req.method == 'POST'){

        var updateEvent = await event.updateOne({'uniqueId' : req.body.uniqueId},
        {$set:{'uniqueId' : req.body.uniqueId,
        'name' : req.body.name,
          'email' : req.body.email,
          'phone' : req.body.phone,
          'eventType' : req.body.eventType,
          'eventdesc' : req.body.eventdesc,
          'eventDate' : req.body.eventDate,
          'startTime' : req.body.startTime,
          'endTime' : req.body.startTime,
          'totalGuest' : req.body.totalGuest
      }}) 
        res.status(200).json({ success: 'success' })
    }
    else{
        res.status(400).json({ error: 'Error' })
    }
}
export default connectDB(handler)
