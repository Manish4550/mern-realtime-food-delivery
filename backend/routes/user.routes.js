import express from "express";
import { GoogleAuth, resetPassword, sendOtp, signIn, signOut, signUp, verifyOtp,} from "../controller/auth.controller.js";
import isAuth from "../middlewares/isAuth.js";
import { getCurrentUser } from "../controller/user.controllers.js";

const userRouter = express.Router();


userRouter.get("/current",isAuth, getCurrentUser);

export default userRouter;
