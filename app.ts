import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8888;


app.get("/", (req: Request, res: Response) => {

    res.send("Belajar dulu express");
});

app.listen(port, () => {
    console.log(`server listen ${port}`);

});