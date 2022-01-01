require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});


mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  });
});
