const express = require('express');

const router = express.Router();

var db = require("../models");




// Route for retrieving all Notes from the db
router.get("/", (req, res) => {
    // Find all Notes
    db.Note.find({})
        .then(function (dbNote) {
            // If all Notes are successfully found, send them back to the client
            res.json(dbNote);
        })
        .catch(function (err) {
            // If an error occurs, send the error back to the client
            res.json(err);
        });
});

router.post("/save", (req, res) => {
    // console.log(req.body);
    db.Note.create(req.body)
        .then(function (dbNote) {
            // If saved successfully, print the new Library document to the console
            console.log(dbNote);
        })
        .catch(function (err) {
            // If an error occurs, print it to the console
            console.log(err.message);
        });
    return res.json({
        msg: 'Your data has been saved!!!!!!'
    });
});

module.exports = router;


