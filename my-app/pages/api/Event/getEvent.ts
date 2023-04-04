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
        const getEvent = await event.find({ "email": req.body.email });
        var item:number = 0;
        // if(getEvent){
            for(item of getEvent){    
                console.log(getEvent[item])
                item++;
        }
          }      
        //   else{
            // res.status(400).json({ error: 'John Doe' })

          }


export default connectDB(handler)
