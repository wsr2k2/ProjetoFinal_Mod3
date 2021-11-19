const express = require("express");
const router  = express.Router();
const EgitoController = require('./../controller/egito.controller');

router.get('/', (req,res) => {
    res.status(200).json({message:"rota comidas egípcias"});
});

router.get("/listAll", EgitoController.getAll);

router.get("/listId/:id", EgitoController.getSingle);

router.post("/add", EgitoController.postCreate);

router.put("/update/:id", EgitoController.putUpdate);

router.delete("/delete/:id",EgitoController.delDelete);

module.exports = router;