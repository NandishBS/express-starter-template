const asyncHandler = (func)=>{
    return async (req, res, next) => {
        try {
           return await func(req,res,next);
        } catch (error) {
            res.status(error.code || 500).json({
                success : false,
                message: err.message
            })
        }
    }
}

// const asyncHandler = (func) => {
//     (req, res, next) => {
//         Promise
//         .resolve(func(req,res,next))
//         .catch(err => next(err))
//     }
// }

export {asyncHandler}