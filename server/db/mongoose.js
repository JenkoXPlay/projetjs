const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// db connexion
mongoose.connect('mongodb://localhost/quizz',{ useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("connected to", db.client.s.url);
});

// database collections
const usersSchema = Schema({
  pseudo: String,
  password: String
});

const scoresSchema = Schema({
  quiz: String,
  user: String,
  score: String
});

const quizSchema = Schema({
  name: String,
  icon: String,
  creator: String,
  questions: [{
    question: String,
    reponses: [{
      reponse: String,
      good: Boolean
    }]
  }]
});

// exports
const Users = mongoose.model('Users', usersSchema);
const Scores = mongoose.model('Scores', scoresSchema);
const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = {};
module.exports.users = Users;
module.exports.scores = Scores;
module.exports.quiz = Quiz;
