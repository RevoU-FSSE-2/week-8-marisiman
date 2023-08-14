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
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);

});

//=====================LATIHAN GET,PUT,PATCH,POST,DELETE=================//

// Get All //

app.get("/", (req: Request, res: Response) => {

    res.send("Belajar dulu express");
});

// Get payments /
app.get("/payments", (req: Request, res: Response) =>{

    console.log("test method post");
    res.send("Payment order in here")
});

// Get Route with Parameter /
app.get("/payments/:nama_rempah",(req: Request, res: Response) => {

    res.send(`Anda memesan rempah ${req.params.nama_rempah} `);
});

// Post /
app.post('/', (req: Request, res: Response) =>{

    console.log("test method post");
    res.send("Coba lagi ulang")
});

// Put /
app.put('/', (req: Request, res: Response) =>{

    console.log("test method post");
    res.send("Coba PUT")
});

// Patch /
app.patch('/', (req: Request, res: Response) =>{

    console.log("test method post");
    res.send("Coba PATCH")
});

// Delete /
app.delete('/', (req: Request, res: Response) =>{

    console.log("test method post");
    res.send("Coba Delete")
});
