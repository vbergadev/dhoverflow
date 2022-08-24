const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const AskModel = require('./models/Ask')
const AnswerModel = require('./models/Answer')

const {getAllAsks, createAsk, askDetails} = require('./controllers/askController')
const createAnswer = require('./controllers/answerController')

connection.authenticate().then(() => {
  console.log('connected')
}).catch((error) => {
  console.log(error)
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", getAllAsks)
app.get("/ask", (req, res) => {
  res.render('ask')
})
app.post("/save-ask", createAsk)
app.get('/ask/:id', askDetails)

app.post('/answer', createAnswer)
app.listen(3003, () => {
  console.log('o pai ta on no http://localhost:3003')
})