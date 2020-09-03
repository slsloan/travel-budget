// dependencies
const User = require('../models/User');
const express = require('express');

// define new router
var router = express.Router();

// configure routes for my router
router.use('/user/add-trip', (req, res) => {
    let {
        userId,
        tripName,
        lengthOfTrip,
        budget,
        country
    } = req.body;

    User.findByIdAndUpdate({ _id: userId }, { $push: { trips: req.body } }, { new: true })
        .then(trip => {
            res.send(trip)
        })
        .catch(err => res.status(500).json(err))

});

module.exports = router;
