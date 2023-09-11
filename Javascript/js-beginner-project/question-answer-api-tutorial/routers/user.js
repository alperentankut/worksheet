const express = require("express");
const {getSingleUser} = require("../controllers/user.js")

const router = express.Router();


router.get("/:id",getSingleUser)

//id yi dinamik olarak alabilmek için expressin
//bir özelliği olan /:id özelliğini kullandık.
//bu id yi yakalamak için req.params ı kullanacağız
module.exports = router