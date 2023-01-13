const express = require("express")
const {json} = require("express")
const connect = require("./database/database")
const app = express()
const userRoute = require("./router/userRouter")
const port =   process.env.PORT || 4000
connect()
app.use(json())
app.use("/", userRoute)
// app.get("/",(req,res)=>{
//     res.send("hello everyone")
    
// })
app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})