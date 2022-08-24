const AskModel = require('../models/Ask')
const AnswerModel = require('../models/Answer')
const getAllAsks = (req, res) => {
  AskModel.findAll({ raw: true, order: [['createdAt', 'DESC']] }).then(asks => {
    res.render('index', { asks: asks })
  })
}
const createAsk = (req, res) => {
  const { title, description } = req.body
  AskModel.create({
    title,
    description
  }).then(() => { res.redirect('/') }).catch((error) => {
    res.send(error)
  })
}
const askDetails = (req, res) => {
  const { id } = req.params
  AskModel.findByPk(id).then(ask => {
    if (ask) {
      AnswerModel.findAll({
        where: { askId: ask.id },
        order: [['createdAt', 'DESC']]
      }).then(answer => {
        return res.render('askDetails', { ask: ask, answer: answer })
      })

    } else { res.redirect('/') }

  })
}
module.exports = { getAllAsks, createAsk, askDetails }