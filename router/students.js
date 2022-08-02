const express = require('express')
const router = new express.Router()
const app = express()
// const dbConnect = require('../conn')
const studentController = require('../controller/studentController')

app.get('/', studentController.readData)

app.post('/create', studentController.insertData)

app.put('/update/:name', studentController.updateData)

app.delete('/delete/:id', studentController.deleteData)

module.exports = app