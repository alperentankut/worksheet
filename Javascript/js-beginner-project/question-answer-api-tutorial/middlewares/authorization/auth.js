const CustomError = require("../../helpers/error/CustomError");
const jwt = require("jsonwebtoken");
const {
  isTokenIncluded,
  getAccessTokenFromHeader,
} = require("../../helpers/authorization/tokenHelpers");

const getAccessToRoute = (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;
  if (!isTokenIncluded(req)) {
    //401 Unauthorized : giriş yapmadan bir sayfaya ulaşmaya çalışıyorsak
    //403 Forbidden : giriş yapsak bile yetkimiz olmayan bir yere
    //girmeye çalışınca
    return next(
      new CustomError("You are not authorized to access this route", 401)
    );
    
  }

  const accessToken = getAccessTokenFromHeader(req);
  jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return next(
        new CustomError("You are not authorized to access this route", 401)
      );
    }
    req.user = {
        id : decoded.id,
        name : decoded.name 
    }
    next();
  });
};

module.exports = {
  getAccessToRoute,
};
