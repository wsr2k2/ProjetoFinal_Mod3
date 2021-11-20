const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(express.json());

const Conn = require("./models/conn/index");

Conn();

app.use(cors());
app.options("*", cors());

app.get('/', (req, res) => {
    res.status(200).json({message: "Bem vindo a API Sabores do Mundo!"});
});

const ItalianRouter = require('./routers/italian.routes');
app.use('/italian', ItalianRouter);

const RussianRouter = require('./routers/russian.routes');
app.use('/russian', RussianRouter);

const MexicanRouter = require('./routers/mexican.routes');
app.use('/mexican', MexicanRouter);

const HolandesaRouter = require("./routers/holanda.routes");
app.use("/holanda",  HolandesaRouter);

const EgitoRouter = require("./routers/egito.routes");
app.use("/egito",  EgitoRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});