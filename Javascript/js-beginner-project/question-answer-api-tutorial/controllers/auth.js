const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const {
  validateUserInput,
  comparePassword,
} = require("../helpers/input/inputHelpers");
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

const login = asyncErrorWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  if (!validateUserInput(email, password)) {
    return next(new CustomError("Please check your inputs", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!comparePassword(password, user.password)) {
    return next(new CustomError("Please check your credentials", 400));
  }

  sendJwtToClient(user, res);

});

const getUser = (req, res, next) => {
  res.json({
    success: true,
    data: {
      id: req.user.id,
      name: req.user.name,
    },
  });
};

module.exports = {
  register,
  getUser,
  login,
};

//Senkron işlemlerde express hatayı otomatik olarak yakalayabiliyor
//fakat asenkron bir işlem yapıldığında bu hatayı bizim yakalamamız
//gerekiyor.
