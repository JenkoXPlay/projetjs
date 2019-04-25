const Quiz = require('../db/mongoose').quiz;

function create(req, res) {
    if (req.body.name && req.body.icon && req.body.creator && req.body.questions) {
        var quiz = {
            name: req.body.name,
            icon: req.body.icon,
            creator: req.body.creator,
            questions: req.body.questions
        }
        var newQuiz = new Quiz(quiz);
        newQuiz.save(function (err, quiz) {
            if (err) {
                return res.status(500).send("Erreur interne");
            } else {
                return res.status(200).send("Quiz ajouté");
            }
        });
    } else {
        return res.status(400).send("Les champs sont vides !");
    }
}

function getAll(req, res) {
    Quiz.find(function (err, data) {
        if (err) {
            return res.status(500).send("Erreur interne");
        } else {
            return res.status(200).json(data);
        }
    });
}

function getOne(req, res) {
    if (req.params.id) {
        Quiz.findById(req.params.id, function (err, data) {
            if (err) {
                return res.status(500).send("Erreur interne");
            } else {
                return res.status(200).json(data);
            }
        });
    } else {
        return res.status(400).send("ID introuvable");
    }
}

// mise à jour d'un quiz complet
function updateOne(req, res) {
    Quiz.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, data) {
        if (err) {
            return res.status(500).send("Erreur interne");
        } else {
            if (data) {
                return res.status(200).json(data);
            } else {   
                return res.status(400).send("ID introuvable");
            }
        }
    });
}

// suppression d'un quiz
function deleteOne(req, res) {
    Quiz.findByIdAndRemove(req.params.id, function (err, data) {
        if (err) {
            return res.status(500).send("Erreur interne");
        } else {
            if (data) {
                return res.status(200).json(req.body);
            } else {
                return res.status(400).send("Quizz introuvable");
            }
        }
    });
}

exports.create = create;
exports.getAll = getAll;
exports.getOne = getOne;
exports.deleteOne = deleteOne;
exports.updateOne = updateOne;