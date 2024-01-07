import express, { Router } from "express";
import { signIn, signUp } from "../controller/user";

const userRoutes: Router = express.Router();

userRoutes.post("/signup", signUp);
userRoutes.post("/signin", signIn);

export default userRoutes