const mongoose = require("mongoose");

const holandesasModel = new mongoose.Schema({
    nome_do_prato: { type: String, required: true},
    imagem: { type: String, required: true},
    ingredientes: {type: String, required: true},
    Modo_de_preparo: {type: String, required: true},
    historia: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const Holandesa = mongoose.model("holandesas", holandesasModel);


module.exports = Holandesa;