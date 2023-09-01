require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Customer = require('./models/CustomerModel')

app.use(express.json())

// DB connection
const db_uri = process.env.DATABASE_URL
mongoose.connect(db_uri).then(() => {
  app.listen(8000, () => console.log('Server is running!'))
  console.log("Database is connected.")
}).catch((error) => {
  console.error(error)
})

// routes
app.get('/', (req, res) => {
  res.send('Homepage')
})

// Gets all customers in the database
app.get('/customers', async(req, res) => {
  try{
    const customers = await Customer.find({})
    res.status(200).json(customers)
  } catch(error){
    console.error(error)
    res.status(500).json({message: error})
  }
})

// Gets customer matching id param in the database
app.get('/customers/:id', async (req, res) => {
  try {
    const { id } = req.params
    const customers = await Customer.findById(id)
    res.status(200).json(customers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error })
  }
})




