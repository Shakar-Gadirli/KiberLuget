const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  term: { type: String, required: true },
  definition: { type: String, required: true },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;