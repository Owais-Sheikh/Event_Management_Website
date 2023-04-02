import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../middlayer/mongoose'
import owais from '../../tables/user'
var CryptoJS = require("crypto-js");

const handler = async (req: NextApiRequest,res: NextApiResponse) => {
  if (req.method == 'POST') {
    var {name,email} = req.body;
    var ciphertext = CryptoJS.AES.encrypt(req.body.password, 'secret key 123').toString();
    var u = new owais({name, email, password: ciphertext })
    await u.save();

    res.status(200).json({ success: "success" })
  }
  else {
    res.status(400).json({ error: 'Error' })

  }
}
export default connectDB(handler);