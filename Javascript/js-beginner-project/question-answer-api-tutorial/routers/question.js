const express = require("express");
const {getAllQuestions,askNewQuestion ,getSingleQuestion} = require("../controllers/question")
const {getAccessToRoute} = require("../middlewares/authorization/auth")
const {checkQuestionExist} = require("../middlewares/database/databaseErrorHelpers");
const router = express.Router();

router.get("/",getAllQuestions)
router.get("/:id",checkQuestionExist,getSingleQuestion)
router.post("/ask",getAccessToRoute,askNewQuestion)


module.exports = router

