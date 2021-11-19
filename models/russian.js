const mongoose = require('mongoose');

const russiansModel = new mongoose.Schema({
    nome: { type: String, require: true },
    ingredientes: { type: String, require: true },
    preparo: { type: String, require: true },
    historia: { type: String, require: true },
    imagem: { type: String, require: true },
    dataCriacao: { type: Date, default: Date.now }
});

const Russian = mongoose.model('russians', russiansModel);

module.exports = Russian;

