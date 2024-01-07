import { Request, Response } from "express";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, UserCredential } from "firebase/auth"

export const signUp = async (req: Request, res: Response) => {
    let email: string = req.body.email.toLowerCase();
    let { password } = req.body;

    let userCredentials: UserCredential | null = null
    try {
        userCredentials = await createUserWithEmailAndPassword(getAuth(),email,password);
    } catch (error) {
        console.log(error)
        res.send("Unable to create user")
    }
    res.send(userCredentials)
}


export const signIn = async (req: Request, res: Response) => {
    const email: string = req.body.email.toLowerCase();
    const { password } = req.body;
    let userCredentials:  UserCredential | null = null
    try {
        userCredentials = await signInWithEmailAndPassword(getAuth(), email, password);
        
    } catch (error) {
        console.log(error)
    }

    res.json(userCredentials)
}

