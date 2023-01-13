const{Schema, model} = require("mongoose")
const todoSchema = new Schema({
    name:{
        type: String
    },
    content:{
        type: String
    }
    //dateCreated: new Date()
   
},
{timestamps: true}
)

const userModel = model("Todo", todoSchema)

module.exports = userModel