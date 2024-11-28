import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const userRouter = Router()

userRouter.route("/register").post(upload.fields([{ name:"photo" , maxCount:1 },{ name:"markscardPdf", maxCount:1 }]), registerUser)

export default userRouter
