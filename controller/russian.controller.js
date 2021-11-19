const Russian = require('../models/russian');

exports.getlistAll = async (req,res) => {
    await Russian.find({}).then((russians) => {
        res.status(200).json(russians);
    }).catch((err) => {
        res.status(404).json({message: "Nenhum prato foi encontrado!"});
    });
};

exports.getlistId = async (req, res) => {
    if(req.params.id.length != 24){
        res.status(400).json({message: "Erro: o ID precisa ter 24 caracteres, insira um ID válido!"});
        return true;
    }
    await Russian.findById(req.params.id).then((russians) => {
        res.status(200).json(russians);
    }).catch((err) => {
        res.status(404).json({message: "Nenhum prato foi localizado, tente um ID válido!"});
    });
};

exports.postAdd = async (req,res) => {
    if(!req.body.nome){
        res.status(400).json({message: "O nome do prato deve ser preenchido!"});
        return;
    }
    if(!req.body.ingredientes){
        res.status(400).json({message: "Os ingredientes do prato devem ser preenchidos!"});
        return;
    }
    if(!req.body.preparo){
        res.status(400).json({message: "O preparo do prato deve ser preenchido!"});
        return;
    }
    if(!req.body.historia){
        res.status(400).json({message: "A história do prato deve ser preenchida!"});
        return;
    }
    if(!req.body.imagem){
        res.status(400).json({message: "A URL da imagem deve ser preenchida!"});
        return;
    }
    await Russian.create(req.body).then(() => {
        res.status(201).json({message: `Prato: ${req.body.nome}, criado com sucesso!`});
    }).catch((err) => {
        res.status(400).json({message: "Não foi possível realizar seu cadastro."});
    });
};

exports.putUpdate = async (req,res) => {
    if(req.params.id.length != 24){
        res.status(400).json({message: "Erro: o ID precisa ter 24 caracteres, insira um ID válido!"});
        return true;
    }
    if(!req.body.nome){
        res.status(400).json({message: "O nome do prato deve ser preenchido!"});
        return;
    }
    if(!req.body.ingredientes){
        res.status(400).json({message: "Os ingredientes do prato devem ser preenchidos!"});
        return;
    }
    if(!req.body.preparo){
        res.status(400).json({message: "O preparo do prato deve ser preenchido!"});
        return;
    }
    if(!req.body.historia){
        res.status(400).json({message: "A história do prato deve ser preenchida!"});
        return;
    }
    if(!req.body.imagem){
        res.status(400).json({message: "A URL da imagem deve ser preenchida!"});
        return;
    }
    await Russian.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.status(201).json({message: `Prato: ${req.body.nome}, atualizado com sucesso!`});
    }).catch((err) => {
        res.status(400).json({message: "Não foi possível realizar sua atualização."});
    });
};

exports.delDelete = async (req,res) => {
    if(req.params.id.length != 24){
        res.status(400).json({message: "Erro: o ID precisa ter 24 caracteres, insira um ID válido!"});
        return true;
    }
    await Russian.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: `Prato deletado com sucesso!`});
    }).catch((err) => {
        res.status(400).json({message: "Não foi possível localizar o prato, digite um ID válido!"});
    });
};