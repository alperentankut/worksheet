const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const {sendJwtToClient} = require("../helpers/authorization/tokenHelpers");

const register = asyncErrorWrapper(async (req, res, next) => {
  //Post Data

  const { name, email, password, role } = req.body;
  //   const name = "Alperen Tankut";
  //   const email = "atnkt123@gmail.com";
  //   const password = "12345";

  const user = await User.create({
    name, // : name,
    email, // : email,
    password, // : password
    role,
    //isimler aynı olduğu zaman es6 standartlarına
    //göre sadece bir tanesini yazmamız yeterli olacaktır
  });
  sendJwtToClient(user, res);

  //async await
});
const tokentest = (req,res,next) =>{
    res.json({
        success : true,
        message : "Welcome"
    })
}

module.exports = {
  register,
  tokentest
};

//Senkron işlemlerde express hatayı otomatik olarak yakalayabiliyor
//fakat asenkron bir işlem yapıldığında bu hatayı bizim yakalamamız
//gerekiyor.
