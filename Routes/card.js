const router = require('express').Router();
const mongoose = require('mongoose');
const Cards = require("../Models/dbCards");

// create the cards
router.post("/card", (req, res) => {
    const DBcard = req.body;

    Cards.create(DBcard, (err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })

})

// get the all cards
router.get("/card", (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })

})

module.exports = router;
