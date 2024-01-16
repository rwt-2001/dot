import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router/index";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const MONGODB_URL: string = process.env.MONGODB_URL!


app.use(express.json());
app.use('/', router());

mongoose.connect(MONGODB_URL).then(() => {
    console.log("Successfully Connected to Database");
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });

}).catch((err) => {
    console.log("Error");
})



app.get('/', (req: Request, res: Response) => {
    res.send("<h1>Api for dot</h1>");
});

