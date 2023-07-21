// create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// create express app
const app = express();

// middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// get all comments
app.get('/posts/:id/comments', (req, res) => {
    res.send([]);
});

// create a comment
app.post('/posts/:id/comments', (req, res) => {
    res.send({});
});

// start server
app.listen(4001, () => {
    console.log('Listening on 4001');
});    