
const express = require("express");
const router = express.Router(); 
const RussianController = require('./../controller/russian.controller'); 

router.get('/', (req,res) => {
    res.status(200).json({message:"Rota comidas russas ok"});
});

router.get("/listAll", RussianController.getlistAll);

router.get("/listId/:id", RussianController.getlistId);

router.post("/add", RussianController.postAdd);

router.put("/update/:id", RussianController.putUpdate);

router.delete("/delete/:id", RussianController.delDelete);

module.exports = router;