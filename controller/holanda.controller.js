const Holandesa = require("./../models/holanda"); 

exports.getAll = async (req,res) => {
    await Holandesa.find({}).then((holandesas) => {
        res.status(200).json(holandesas);
    }).catch((err) => {
        res.status(404).json({message: "nenhuma comida foi encontrada"});
        console.error(err);
    });
}

exports.getSingle = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ERROR: O id precisa ter 24 caracteres"});
        return true;
    }
    await Holandesa.findById(req.params.id).then((holandesas) => {
        res.status(200).json(holandesas);
    }).catch((err) => {
        res.status(404).json({message: "nenhuma comida foi encontrada"});
        console.error(err);
    });
}

exports.postCreate = async (req,res) => {
    if(!req.body.nome_do_prato){
        res.status(400).json({message: "nome esta vazio"});
        return;
    }
    if(!req.body.imagem){
        res.status(400).json({message: "URL da imagem esta vazio"});
        return;
    }
    if(!req.body.ingredientes){
        res.status(400).json({message: "ingredientes esta vazio"});
        return;
    }
    if(!req.body.Modo_de_preparo){
        res.status(400).json({message: "Modo de preparo esta vazio"});
        return;
    }
    if(!req.body.historia){
        res.status(400).json({message: "historia esta fazio"});
        return;
    }
    await Holandesa.create(req.body).then( () => {
        res.status(201).json({message: "Comida inserida com sucesso!!!"})
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    });
}

exports.putUpdate = async (req,res) => {
    const id = req.params.id;
    if(id.length != 24){
        res.status(400).json({message: "ERROR: O id precisa ter 24 caracteres"});
        return true;
    }
    await Holandesa.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "A comida foi atualizada com sucesso!!!"})
    }).catch((err) => {
        res.status(400).json({message: "Algo deu errado!!!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    const id = req.params.id;
    if(id.length != 24){
        res.status(400).json({message: "ERROR: O id precisa ter 24 caracteres"});
        return true;
    }
    await Holandesa.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "Comida deletada com sucesso!!!"});
    }).catch((err) => {
        res.status(404).json({message: "nenhuma comida holandesa foi encontrada"});
        console.error(err);
    });
}