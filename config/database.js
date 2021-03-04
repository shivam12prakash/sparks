const Sequelize = require('sequelize')

module.exports = new Sequelize('customers', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})
