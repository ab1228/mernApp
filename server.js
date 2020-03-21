const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const PORT = process.env.PORT || 8070;

var app = express();



app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!");
});
