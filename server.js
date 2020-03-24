require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 8080;

var app = express();
const routes = require('./routes/apiroutes.js');
///TO LOG HTTP REQUEST
app.use(morgan('tiny'));
///MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect("mongodb://localhost/mernApp", {
    useNewUrlParser: true, useUnifiedTopology: true
});
/// TO CHECK IF MONGOOSE HAS BEEN CONNECTED
mongoose.connection.on('connected', () => {
    console.log('mongoose is connected')
})


app.use('/api', routes);



app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!");
});
