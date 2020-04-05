require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 8060;

const { URI } = process.env;

var app = express();
const routes = require('./routes/apiroutes.js');
///TO LOG HTTP REQUEST
app.use(morgan('tiny'));
///MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
///GET MONGO READY FOR HEROKU
mongoose.connect(process.env.MONGODB_URI || URI, {
    useNewUrlParser: true, useUnifiedTopology: true
});
/// TO CHECK IF MONGOOSE HAS BEEN CONNECTED
mongoose.connection.on('connected', () => {
    console.log('mongoose is connected')
})

app.use('/api', routes);


//SERVE STATIC ASSETS
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}

app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!");
});

