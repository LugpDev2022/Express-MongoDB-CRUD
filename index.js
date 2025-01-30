const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Node API');
});

mongoose
  .connect(
    'mongodb+srv://lugpdev2022:hwQNw5SKTqzTWuto@backenddb.nj4l0.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB'
  )
  .then(() => {
    console.log('Connected to database');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log('Connection failed');
  });
