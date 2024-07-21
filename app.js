const express = require('express')
const app = express()

const userModel = require('./usermodel')

app.get('/',(req,res)=>{
    res.send("hey")
})

app.get('/create',async(req,res)=>{
    let createduser = await userModel.create({
    name: "arpit",
    email: "arpitpandey@gmail.com",
    username:"arpit9"
   })
   res.send(createduser)
})

app.listen(3000)