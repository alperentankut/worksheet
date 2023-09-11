const express = require("express");
const {getSingleUser , getAllUsers} = require("../controllers/user.js");
const {checkUserExist} = require("../middlewares/database/databaseErrorHelpers")

const router = express.Router();

router.get("/",getAllUsers) ; //Tüm kullanıcıları alma
router.get("/:id",checkUserExist,getSingleUser) //idye göre kullanıcı alma

//id yi dinamik olarak alabilmek için expressin
//bir özelliği olan /:id özelliğini kullandık.
//bu id yi yakalamak için req.params ı kullanacağız
module.exports = router