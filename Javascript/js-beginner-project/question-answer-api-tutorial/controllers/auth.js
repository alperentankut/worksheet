const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const {
  validateUserInput,
  comparePassword,
} = require("../helpers/input/inputHelpers");
const sendEmail = require("../helpers/libraries/sendEmail");

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

const logout = asyncErrorWrapper(async (req, res, next) => {
  const { NODE_ENV } = process.env;

  return res
    .status(200)
    .cookie({
      httpOnly: true,
      expires: new Date(Date.now()),
      secure: NODE_ENV === "development" ? false : true,
    })
    .json({
      sucess: true,
      message: "Logout successfull",
    });
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
const imageUpload = asyncErrorWrapper(async (req, res, next) => {
  // Image upload success
  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      profile_image: req.savedProfileImage,
    },
    {
      new: true,
      runValidators: true, //bu 3. parametre yeni user döndüğü için
      //yazılıyor. Doğrulayıcıların çalışması içinde runValidators
      //kullanılıyor.
    }
  );
  res.status(200).json({
    success: true,
    message: "Image Upload Successful",
    data: user,
  });
});

//Forgot Password

const forgotPassword = asyncErrorWrapper(async (req, res, next) => {
  const resetEmail = req.body.email;

  const user = await User.findOne({ email: resetEmail });

  //Email i resetEmail olan kullanıcıyı alıyoruz.

  if (!user) {
    return next(new CustomError("There is no user with that email", 400));
  }

  const resetPasswordToken = user.getResetPasswordTokenFromUser();

  await user.save();

  const resetPasswordUrl = `http://localhost:5000/api/auth/resetpassword?resetPasswordToken=${resetPasswordToken}`;

  const emailTemplate = `
    <h3>Reset Your Password</h3>
    <p> This <a href = "${resetPasswordUrl}" target = "_blank">link</a> will expire in 1 hours</p>`;

  try {
    await sendEmail({
      from: process.env.SMTP_USER,
      to: resetEmail,
      subject: "Reset Your Password",
      html: emailTemplate,
    });
    return res.status(200).json({
      success: true,
      message: "Token send your email",
    });
  } catch (err) {
    (user.resetPasswordExpire = undefined),
      (user.resetPasswordToken = undefined);

    await user.save();

    return next(new CustomError("Email could not be send", 500));
  }
});

const resetPassword = asyncErrorWrapper(async (req, res, next) => {
  const { resetPasswordToken } = req.query;
  const { password } = req.body;

  if (!resetPasswordToken) {
    next(new CustomError("Please provide a valid token", 400));
  }

  let user = await User.findOne({
    resetPasswordToken: resetPasswordToken, //tokenımız mevcutsa
    resetPasswordExpire: { $gt: Date.now() },
    //Burda bizim expire süremiz şuanki zamandan küçük kontrolü
    //yaptık. Bunu da Mongodb nin $gt (greater then) özelliğini
    //kullanıyoruz.
  });
  if(!user){
    return next(new CustomError("Invalid Token or Session Expired",404))
  }

  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined
  //parolamızı sıfırladıktan sonra bu iki değere ihtiyacımız 
  //olmayacağı için undefined yapıyoruz.
  
  await user.save()
  return res.status(200).json({
    success: true,
    message: "Reset Password Process Successfull",
  });
});

module.exports = {
  register,
  getUser,
  logout,
  login,
  imageUpload,
  forgotPassword,
  resetPassword,
};

//Senkron işlemlerde express hatayı otomatik olarak yakalayabiliyor
//fakat asenkron bir işlem yapıldığında bu hatayı bizim yakalamamız
//gerekiyor.
