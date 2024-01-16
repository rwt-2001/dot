import express from "express";
import { checkEmail, checkUserName, signUp } from "../controller/user";


export default (router: express.Router) => {
    router.post("/auth/signUp", signUp)
    router.post("/auth/checkEmail", checkEmail)
    router.post("/auth/checkUserName", checkUserName)
}