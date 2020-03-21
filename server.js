const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 8070;

var app = express();

app.use(morgan('tiny'));

mongoose.connect("mongodb://localhost/mernApp", {
    useNewUrlParser: true, useUnifiedTopology: true
});
/// TO CHECK IF MONGOOSE HAS BEEN CONNECTED
mongoose.connection.on('connected', () => {
    console.log('mongoose is connected')
})
var db = require("./models");



app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!");
});
