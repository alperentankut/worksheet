const User = require("../../models/User");
const CustomError = require("../../helpers/error/CustomError");
const Question = require("../../models/Question");
const Answer = require("../../models/Answer");

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
  const question_id = req.params.id || req.params.question_id;
  // gelen id kullanıcı id si veya question id olsa da al diyoruz.
  const question = await Question.findById(question_id);

  if (!question) {
    return next(new CustomError("There is no such question with that id", 400));
  }
  next();
});
const checkQuestionAndAnswerExist = asyncErrorWrapper(
  async (req, res, next) => {
    const question_id = req.params.question_id;
    // gelen id kullanıcı id si veya question id olsa da al diyoruz.
    const answer_id = req.params.answer_id;

    const answer =await Answer.findOne({
      _id: answer_id,
      question : question_id,
    });
    if (!answer) {
      return next(
        new CustomError(
          "There is no answer with that id associated with question id",
          400
        )
      );
    }
    next()
  }
);

module.exports = {
  checkUserExist,
  checkQuestionExist,
  checkQuestionAndAnswerExist,
};

//biz her seferinde bu id kontrolü yapmak yerine bunu
//merkezi bir middleware ile tek seferde kontrol etmek
//için bu yöntemi kullandık
