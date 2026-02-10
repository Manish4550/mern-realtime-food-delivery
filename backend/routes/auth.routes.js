import express from "express";
import { GoogleAuth, resetPassword, sendOtp, signIn, signOut, signUp, verifyOtp,} from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.get("/signout", signOut);
authRouter.post("/send-otp",sendOtp);
authRouter.post("/verify-otp", verifyOtp);
authRouter.post("/reset-password", resetPassword);
authRouter.post("/google-auth", GoogleAuth);


export default authRouter;
