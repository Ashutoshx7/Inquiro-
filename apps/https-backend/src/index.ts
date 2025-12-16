import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config"

const app = express();

app.post("/signup", (req, res) => {

  
});

app.post("/signin", (req, res) => {

    const userId=1;
    
    
    const token=jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        token
    })

});

app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});