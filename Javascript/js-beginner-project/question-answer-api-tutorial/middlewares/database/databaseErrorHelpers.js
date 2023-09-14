const User = require("../../models/User");
const CustomError = require("../../helpers/error/CustomError");
const Question = require("../../models/Question")
const asyncErrorWrapper = require("express-async-handler");

const checkUserExist = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return next(new CustomError("There is no such user with that id", 400));
  }
  next();
});

const checkQuestionExist = asyncErrorWrapper(async (req, res, next) => {
  const {id} = req.params;
  const question = await Question.findById(id);

  if (!question) {
    return next(new CustomError("There is no such question with that id", 400));
  }
  next();
});




module.exports = { checkUserExist ,checkQuestionExist };

//biz her seferinde bu id kontrolü yapmak yerine bunu
//merkezi bir middleware ile tek seferde kontrol etmek 
//için bu yöntemi kullandık