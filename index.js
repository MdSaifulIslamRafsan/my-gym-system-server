
const express = require('express');
const { default: connectDB } = require('./src/db');
const app = express()
require("dotenv").config();
const port = process.env.PORT || 5000

// Middleware
app.use(express.json());

// Connect to Database
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})