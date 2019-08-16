const Joi = require('Joi');
//Joi.objectId = require('joi-object')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/users');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/admin')
  .then(()=> console.log("Now connected to the database"))
  .catch(err=> console.log("Something went wrong here"));

app.use(express.json());
app.use('/api/users', users);

const port = 4000;
app.listen(port,()=> console.log(`Listening on post ${port}`));
