const express = require("express");
const router = require('./router');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./function/user');
const quiz = require('./function/quiz');
const score = require('./function/score');

const app = express();

const port = 8081;

//Body Parser
var urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

// création des routes pour la bdd

// route pour user
app.post('/register', user.register);
app.get('/user', user.getAll);
app.get('/user/:id', user.getId);
app.get('/pseudo/:pseudo', user.getPseudo);
app.delete('/user/:id', user.deleteOne);
app.put('/user/:id', user.updateOne);

// routes pour quiz
app.post('/quiz', quiz.create);
app.get('/quiz', quiz.getAll);
app.get('/quiz/:id', quiz.getOne);
app.delete('/quiz/:id', quiz.deleteOne);
app.put('/quiz/:id', quiz.updateOne);

// routes pour scores
app.post('/score', score.create);
app.get('/score', score.getAll);
app.get('/score/:id', score.getById);
app.get('/scorequiz/:idquiz', score.getByQuiz);
app.get('/scoreuser/:iduser', score.getByUser);
app.put('/score/:id', score.updateOne);
app.put('/scorequizuser/:idquiz/:iduser', score.updateQuizUser);

app.use(cors());
app.use(router).listen(port, () => console.log('Example app listening on port ' + port));