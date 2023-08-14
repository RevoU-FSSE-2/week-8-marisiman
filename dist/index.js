"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_1 = require("./data");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8888;
app.use(body_parser_1.default.json());
// Get All Spices/
app.get("/spices", (req, res) => {
    res.json({
        message: "Success get all spices order",
        spices: data_1.spices,
    });
    //res.send("Belajar dulu express");
});
//==================== Get all spices ========================//
// Get by Id Spices //
app.get("/spices/:id", (req, res) => {
    const spice = data_1.spices.filter((item) => {
        console.log("dalam", item);
        return item.id == req.params.id;
    });
    console.log("luar", spice);
    if (spice.length != 0) {
        res.json({
            message: "Success get all spices order",
            spice,
        });
    }
    else {
        res.status(404).json({
            message: "Failed get all spices order",
        });
    }
});
//==================== Get by Id spices ========================//
// ======= Post newOrder Spices =======//
app.post("/spices", (req, res) => {
    const neworder = {
        id: data_1.spices.length + 1,
        title: req.body.title,
        payment: req.body.payment,
        amount: req.body.amount,
        price: req.body.price,
    };
    data_1.spices.push(neworder);
    res.status(201).json({
        message: "Success adding one spices order",
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
app.put('/spices/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const spicesIndex = data_1.spices.findIndex((p) => p.id === id);
    if (spicesIndex !== -1) {
        const updatedspices = {
            id,
            title: req.body.title,
            payment: req.body.payment,
            amount: req.body.amount,
            price: req.body.price,
        };
        data_1.spices[spicesIndex] = updatedspices;
        res.json(updatedspices);
    }
    else {
        res.status(404).json({ message: 'Your Spices is Not Found' });
    }
});
//================== Put new Order spaces ==================//
// ======= Patch newOrder Spices =======//
app.patch('/spices/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const spicesIndex = data_1.spices.findIndex((p) => p.id === id);
    if (spicesIndex !== -1) {
        const updatedspices = Object.assign(Object.assign({}, data_1.spices[spicesIndex]), req.body);
        data_1.spices[spicesIndex] = updatedspices;
        res.json(updatedspices);
    }
    else {
        res.status(404).json({ message: ' Your Spices is Not Found' });
    }
});
//================== Patch new Order spaces ==================//
// ======= Delete Order Spices =======//
app.delete('/spices/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const spicesIndex = data_1.spices.findIndex((p) => p.id === id);
    if (spicesIndex !== -1) {
        const deletedspices = data_1.spices.splice(spicesIndex, 1)[0];
        res.json(deletedspices);
    }
    else {
        res.status(404).json({ message: 'Financial  is Not Found' });
    }
});
//================== Deleted Order spaces ==================//
// Get All //
app.get("/", (req, res) => {
    res.send("Belajar dulu express");
});
// Get payments /
app.get("/payments", (req, res) => {
    console.log("test method post");
    res.send("Payment order in here");
});
// Get Route with Parameter /
app.get("/payments/:nama_rempah", (req, res) => {
    res.send(`Anda memesan rempah ${req.params.nama_rempah} `);
});
// Post /
app.post('/', (req, res) => {
    console.log("test method post");
    res.send("Coba lagi ulang");
});
// Put /
app.put('/', (req, res) => {
    console.log("test method post");
    res.send("Coba PUT");
});
// Patch /
app.patch('/', (req, res) => {
    console.log("test method post");
    res.send("Coba PATCH");
});
// Delete /
app.delete('/', (req, res) => {
    console.log("test method post");
    res.send("Coba Delete");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
