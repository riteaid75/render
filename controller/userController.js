const User = require("../model/User")


exports.getAllUsers = async (req,res)=>{
    try {
        let users = await User.find()
        if(users.length ===0)
        return res.status(404).json({
            message: "no user found"
        })
        res.status(200).json({
            message: "Users Found",
            users
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal error",
            error: error.message
        })
    }
}



//get single user



exports.getUser = async (req,res)=>{
    try {
        let id ={_id: req.params.id}
        let user = await User.findOne(id)
        if(!user)
        return res.status(404).json({
            message: "user not found"
        })
        res.status(200).json({
            message: "Users Found",
            user
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal error",
            error: error.message
        })
    }
}

//create a user

exports.createUser = async (req,res)=>{
    try {
        let user = await req.body
        let created = await User.create(user)
        if(!created)
        return res.status(400).json({
            message: "creation failed"
        })
        res.status(200).json({
            message: "Users created",
            user: created
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal error",
            error: error.message
        })
    }
}
exports.deleteUser = async (req,res)=>{
    try {
        let id ={_id: req.params.id}
        let deleted = await User.findOneAndRemove(id)
        if(!deleted)
        return res.status(404).json({
            message: "user not deleted"
        })
        res.status(200).json({
            message: "Users deleted"
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal error",
            error: error.message
        })   
    }
}