const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const path = require('path')
const Sequelize = require('sequelize')
const db = require('./config/database')

const app = express()
app.use(bodyParser.json())

const sequelize = new Sequelize('customer', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  })

app.get('/', (req, res) => res.send('sHIVAM'))

const PORT = process.env.PORT || 3000

app.use('/customer', require('./routes/customer'))

app.listen(PORT, console.log(`Server ported on port ${PORT}`))