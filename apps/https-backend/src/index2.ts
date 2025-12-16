import express from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config";

const app=express();




app.post("signin",(req,res){
    const userId=1

    const token=jwt.sign({
        userId
   },JWT_SECRET)
  
   

   res.json({
    message:token
   })
})
app.listen(4000)