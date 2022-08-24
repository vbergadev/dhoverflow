const Sequelize = require('sequelize')
const connection = require('../database/database')

const Answer = connection.define('answers', {
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  askId: {
    type: Sequelize.INTEGER,
    allowNull:false
  }
});
Answer.sync({ force: false })
module.exports = Answer
