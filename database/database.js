const Sequelize = require('sequelize')

const connection = new Sequelize('dhoverflow', 'root', 'Info@1234', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection