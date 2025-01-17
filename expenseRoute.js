const express = require('express')
const route = express.Router()
const { getAllExpense, createExpense, updateExpense, deleteExpense } = require('../Controller/expenseController.js')

route.get('/getAllExpense', getAllExpense);
route.post('/createExpense', createExpense);
route.put('/updateExpense/:uuid', updateExpense);
route.delete('/deleteExpense/:uuid', deleteExpense);

module.exports = route