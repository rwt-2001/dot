import express, { Express, Request, Response } from "express";
import { initializeFirebase } from "./firebase/firebase";
import dotenv from "dotenv";
import userRoutes from "./routes/user";

dotenv.config();
initializeFirebase();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/user', userRoutes)
app.get('/', (req: Request, res: Response) => {
    res.send("<h1>Api fror dot</h1>");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});