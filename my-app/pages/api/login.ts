import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../middlayer/mongoose'
import owais from '../../tables/user'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req: NextApiRequest,res: NextApiResponse) => {
  if(req.method == 'POST'){
    var user = await owais.findOne({"email" : req.body.email});
    var bytes  = CryptoJS.AES.decrypt(user.password, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    if(user){
        if(user.email == req.body.email && req.body.password == originalText){
            var token = jwt.sign({ email : user.email,password: user.password }, 'shhhhh')
            res.status(200).json({success : true, token})
        }
        else{
            res.status(200).json({success : false ,error: 'Invalid input' })

        }
    }
    else{
        res.status(200).json({success : false ,error: 'No user found' })

    }
  }

}
export default connectDB(handler);