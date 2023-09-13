const express = require("express");
const {getAccessToRoute,getAdminAccess} = require("../middlewares/authorization/auth");
const {blockUser , deleteUser} = require("../controllers/admin");
const { checkUserExist } = require("../middlewares/database/databaseErrorHelpers");

const router = express.Router();
router.use([getAccessToRoute , getAdminAccess])
// router.use(checkUserExist) ilk başta buraya yazdığımızda hata aldık
//bunun sebebi de fonksiyonun get requestten önce çalışıp id yi alamaması.
router.get("/block/:id",checkUserExist,blockUser)
    
router.delete("/user/:id",checkUserExist,deleteUser)




module.exports = router;