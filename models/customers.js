const Sequelize = require('sequelize')
const db = require('../config/database')

const customer = db.define('customer', {
    name: {
      type: Sequelize.STRING,
    },
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
    },
    currentamt: {
      type: Sequelize.INTEGER,
    },
    totalamt: {
      type: Sequelize.INTEGER,
    },
  })
  
  module.exports = customer