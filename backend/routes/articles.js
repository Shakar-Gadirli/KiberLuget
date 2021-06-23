const router = require('express').Router();
let Article = require('../models/article_model');

router.route('/articles').get((req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:article_name').get((req, res) => {
  Exercise.findById(req.params.article_name)
    .then(article => res.json(article))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


