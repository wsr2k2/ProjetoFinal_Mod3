const express = require("express");
const router  = express.Router();
const HolandaController = require('./../controller/holanda.controller'); 

router.get('/', (req,res) => {
    res.status(200).json({message:"rota comidas holandesas"});
});

router.get("/listAll", HolandaController.getAll);

router.get("/listId/:id", HolandaController.getSingle);

router.post("/add", HolandaController.postCreate);

router.put("/update/:id", HolandaController.putUpdate);

router.delete("/delete/:id",HolandaController.delDelete);

module.exports = router;