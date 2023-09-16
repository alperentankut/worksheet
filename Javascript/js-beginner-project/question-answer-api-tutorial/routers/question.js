const express = require("express");
const answer = require("./answer")
const {
  getAllQuestions,
  askNewQuestion,
  getSingleQuestion,
  editQuestion,
  deleteQuestion,
  likeQuestion,
  undoLikeQuestion,
} = require("../controllers/question")
const {
  getAccessToRoute,
  getQuestionOwnerAccess,
} = require("../middlewares/authorization/auth");
const {
  checkQuestionExist,
} = require("../middlewares/database/databaseErrorHelpers");
const router = express.Router();

router.get("/:id/like", [getAccessToRoute, checkQuestionExist], likeQuestion);
router.get(
  "/:id/undo_like",
  [getAccessToRoute, checkQuestionExist],
  undoLikeQuestion
);
router.get("/", getAllQuestions);
router.get("/:id", checkQuestionExist, getSingleQuestion);
router.post("/ask", getAccessToRoute, askNewQuestion);
router.put(
  "/:id/edit",
  [getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess],
  editQuestion
);
router.delete(
  "/:id/delete",
  [getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess],
  deleteQuestion
);

router.use("/:question_id/answers",checkQuestionExist,answer);
//answer ve questionlar arasında sıkı bir bağ olacağı için
//answer ların route ını bu şekilde verdik

module.exports = router;
