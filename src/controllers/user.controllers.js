import asyncHandler from "../utils/asyncHandler.utils.js"

const registerUser = asyncHandler(async (req,res)=>{
    console.log(req.query)
    console.log(req.params)
    console.log(req.body)
    console.log(req.files)
})

export {registerUser}