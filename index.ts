import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import {spices} from './data';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8888;

app.use(bodyParser.json());



// Get All Spices/

app.get("/spices", (req: Request, res: Response) => {

    res.json({
        message:"Success get all spices order",
        spices,
    });
    //res.send("Belajar dulu express");
});

//==================== Get all spices ========================//



// Get by Id Spices //
app.get("/spices/:id",(req: Request, res: Response) => {
    const spice = spices.filter((item:any) => {
        console.log("dalam", item);
        return item.id == req.params.id;
    });

    console.log("luar", spice);

    if (spice.length != 0) {
        res.json({
            message:"Success get all spices order",
            spice,
        });   
    } else {
        res.status(404).json({
            message:"Failed get all spices order",
        });   
    }

});

//==================== Get by Id spices ========================//



// ======= Post newOrder Spices =======//
app.post("/spices", (req: Request, res: Response) => {
    
    const neworder = {
        id: spices.length + 1,
        title: req.body.title,
        payment: req.body.payment,
        amount: req.body.amount,
        price: req.body.price,
    };

    spices.push(neworder);
    res.status(201).json({
        
        message:"Success adding one spices order",
        neworder,
    });
});
  //  console.log(req.body);
    
  //  spices.push(req.body);
  //  console.log(spices);

  //  res.json({
  //      message:"Success adding one spices order",
  //      spices,
  // });

//});

//================== Post new Order spaces ==================//


// ======= Put newOrder Spices =======//
app.put('/spices/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const spicesIndex = spices.findIndex((p) => p.id === id);
    if (spicesIndex !== -1) {
        const updatedspices ={
            id,
            title: req.body.title,
            payment: req.body.payment,
            amount: req.body.amount,
            price: req.body.price,
        };
        spices[spicesIndex] = updatedspices;
        res.json(updatedspices);

    } else {
        res.status(404).json({ message: 'Your Spices is Not Found' });
    }
});
//================== Put new Order spaces ==================//




// ======= Patch newOrder Spices =======//
app.patch('/spices/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const spicesIndex = spices.findIndex((p) => p.id === id);
    if (spicesIndex !== -1) {
        const updatedspices = {
            ...spices[spicesIndex],
            ...req.body,
        };
        spices[spicesIndex] = updatedspices;
        res.json(updatedspices);
    } else {
        res.status(404).json({ message: ' Your Spices is Not Found' });
    }
});
//================== Patch new Order spaces ==================//



// ======= Delete Order Spices =======//
app.delete('/spices/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const spicesIndex = spices.findIndex((p) => p.id === id);
    if (spicesIndex !== -1) {
        const deletedspices = spices.splice(spicesIndex, 1)[0];
        res.json(deletedspices);
    } else {
        res.status(404).json({ message: 'Financial  is Not Found' });
    }
});

//================== Deleted Order spaces ==================//



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



app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);

});