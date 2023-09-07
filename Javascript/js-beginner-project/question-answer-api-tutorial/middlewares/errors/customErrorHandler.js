const CustomError = require("../../helpers/error/CustomError")

const customErrorHandler = (err, req, res, next) => {
  let customError = err;
  if(err.name === "SyntaxError"){
    customError = new CustomError("Unexpected Sytnax",400);
  }

  if(err.name === "ValidationError"){
    customError = new CustomError(err.message,400)
  }
   console.log(customError.message , customError.status)

  res.status(customError.status || 500).json({
    success: false,
    message : customError.message
  });
};

module.exports = customErrorHandler;

//Bizim bazı hatalarımızın status u olmuyor
//bunun için bunu kontrol edip kodu düzenlememiz
//gerekebilir. if ile bunu kontrol edip eğer statusu
//olmayan bir hata varsa CustomError u güncelliyoruz.
//herhangi bir status olmadığında 500 ınternal server
//error hatasını veriyoruz.