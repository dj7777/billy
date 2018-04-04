const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config')

const app = express();

mongoose.connect(config.database, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to database");
    }
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res, next) => {
    res.json({
        user: 'Deepak'
    });
});

app.listen(config.port, (err) => {
    console.log('Magic happens on port ' + config.port);
});