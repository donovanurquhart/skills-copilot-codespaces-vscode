// create web server
const express = require('express');
const app = express();
const port = 3000;

// connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-demo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

// create schema
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    date: { type: Date, default: Date.now }
});

// create model
const Comment = mongoose.model('Comment', commentSchema);

// set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// use static files
app.use(express.static('public'));

// use middleware
app.use(express.urlencoded({ extended: true }));

// get request
app.get('/', (req, res) => {
    Comment.find().then(comments => {
        res.render('index', { comments: comments });
    });
});

// post request
app.post('/', (req, res) => {
    const comment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    });
    comment.save().then(() => {
        res.redirect('/');
    });
});

// listen to port
app.listen(port, () => console.log(`Listening on port ${port}...`));