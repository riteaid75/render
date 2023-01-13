const mongoose =require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const {config}=require("dotenv")
config()
async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL,
            
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
        console.log('connected to the mongo')
    } catch (error) {
        console.log(error.message)
    }
}
// mongoose.connect(
//     process.env.MONGO_URL,
//     {
//                         useUnifiedTopology: true,
//                         useNewUrlParser: true,
//                     },()=>{
//                         console.log("db connected")
//                     }

// )
module.exports = connect