"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8888;
app.get("/", (req, res) => {
    res.send("Belajar dulu express");
});
app.listen(port, () => {
    console.log(`server listen ${port}`);
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//=====================LATIHAN GET,PUT,PATCH,POST,DELETE=================//
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
