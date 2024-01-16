import { Request, Response } from "express";
import * as UserRepostory from "../repository/user";
import mongoose from "mongoose";
import { User } from "../model/user";
interface UserDetails {
    name: string,
    email: string,
    dob: string,
    userName: string
}

export const signUp = async (req: Request, res: Response) => {
    const userDetails: UserDetails = req.body;
    try {
        const user = await UserRepostory.default.createUser({ name: userDetails.name, email: userDetails.email, date_of_birth: userDetails.dob, user_name: userDetails.userName.toLowerCase() });
        res.send(user)
    } catch (err) {
        res.send(err)
    }
}

export const checkEmail = async (req: Request, res: Response) => {
    const userDetails: UserDetails = req.body;
    try {
        const count = await UserRepostory.default.getEmailCount(userDetails.email);
        res.send(count.toString())
    } catch (err) {
        console.log(err);
    }
}

export const checkUserName = async (req: Request, res: Response) => {
    const userDetails: UserDetails = req.body;
    try {
        const count = await UserRepostory.default.getUserNameCount(userDetails.userName);
        res.send(count.toString())
    } catch (err) {
        console.log(err)
    }
}

