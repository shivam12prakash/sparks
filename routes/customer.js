const express = require('express')
const router = express.Router()
const db = require('../config/database')
const customer = require('../models/customers')

//Get Customer
router.get('/', (req, res) => 
    customer.findAll()
    .then(customer => 
        {console.log(customer)
        res.sendStatus(200)
    })
    .catch(err => console.log(err)))


//Add a Customer
router.post('/add', async (req, res) => {
    await customer.create(req.body)
    res.redirect('/customers')
  })

  //Find a cUstomer by ID
  router.get('/find', async (req, res) => {
    const id = req.query.id
    const cust = await customer.findOne({ where: { id } })
    res.status(200).send(cust)
  })
  

module.exports = router