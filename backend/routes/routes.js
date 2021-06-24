const router = require('express').Router();
let Article = require('../models/article_model');

router.get('/articles', (req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.get('/home', (req, res) => {
	res.json('(This text comes from back)')
})

module.exports = router;


