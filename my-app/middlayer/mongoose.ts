import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from 'next'

const connectDB = (handler:any) => async (req:NextApiRequest ,res:NextApiResponse) => {
  if(mongoose.connections[0].readyState){
    return handler(req, res);
  }
  var c:any = process.env.MONGODB_URI;
  await mongoose.connect(c)
  return handler(req, res);
}

export default connectDB; 