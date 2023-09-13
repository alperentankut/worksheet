const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");


const blockUser = asyncErrorWrapper(async(req,res,next)=>{
    const {id} = req.params;

    const user = await User.findById(id);

    user.blocked = !user.blocked

    await user.save()

    res.status(200).json({
        success : true,
        message : "Block-Unblock Successfull"
    })
})

const deleteUser = asyncErrorWrapper(async(req,res,next)=>{
    const {id} = req.params;

    const user = await User.findById(id);

    await user.deleteOne();

    return res.status(200).json({
        success : true,
        message : "Delete operation successful"
    })
})

module.exports = {blockUser,deleteUser}