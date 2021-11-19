const express = require("express"); 
const app = express(); 
require('dotenv').config();
const cors = require("cors");
app.use(express.json());

const Conn = require("./models/conn/index"); 

Conn();

app.use(cors());
app.options("*", cors());

app.get('/', (req,res) => {
    res.status(200).json({message:"API OK"});
});

const HolandesaRouter = require("./routers/holanda.routes");
app.use("/holanda",  HolandesaRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});

