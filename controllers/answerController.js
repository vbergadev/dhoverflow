const AnswerModel = require('../models/Answer')

const createAnswer = (req, res) => {
  const { body, askId } = req.body
  AnswerModel.create({
    body: body,
    askId: askId
  }).then(() => {
    res.redirect("/ask/"+askId)
  })
}
module.exports = createAnswer