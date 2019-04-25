const Score = require('../db/mongoose').scores;

function create(req, res) {
    if (req.body.quiz && req.body.user && req.body.score) {
        Score.findOne({ quiz: req.body.quiz, user: req.body.user}, function (err, data) {
            if (err) {
                return res.status(500).send("Erreur interne");
            } else {
                if (data) {
                    return res.status(200).send("Donnée déjà existante");
                } else {
                    var score = {
                        quiz: req.body.quiz,
                        user: req.body.user,
                        score: req.body.score
                    };
                    var newScore = new Score(score);
                    newScore.save(function (error, data) {
                        if (error) {
                            return res.status(500).send("Erreur interne");
                        } else {
                            return res.status(200).send("Score ajouté");
                        }
                    });
                }
            }
        });
    } else {
        return res.status(500).send("Champs non rmeplis");
    }
}

function getAll(req, res) {
    Score.find(function (err, data) {
        if (err) {
            return res.status(500).send("Erreur interne");
        } else {
            return res.status(200).json(data);
        }
    });
}

function getById(req, res) {
    Score.findById(req.params.id, function (err, data) {
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

function getByQuiz(req, res) {
    if (req.params.idquiz) {
        Score.find({ quiz: req.params.idquiz }, function (err, data) {
            if (err) {
                return res.status(500).send("Erreur interne");
            } else {
                return res.status(200).json(data);
            }
        });
    } else {   
        return res.status(400).send("ID manquant");
    }
}

function getByUser(req, res) {
    if (req.params.iduser) {
        Score.find({ user: req.params.iduser }, function (err, data) {
            if (err) {
                return res.status(500).send("Erreur interne");
            } else {
                return res.status(200).json(data);
            }
        });
    } else {
        return res.status(400).send("ID manquant");
    }
}

function updateOne(req, res) {
    Score.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
        if (err) {
            return res.status(500).send("Erreur interne");
        } else {
            if (data) {
                return res.status(200).json(req.body);
            } else {
                return res.status(400).send("ID introuvable");
            }
        }
    });
}

function updateQuizUser(req, res) {
    if (req.params.idquiz && req.params.iduser) {
        Score.findOneAndUpdate({ quiz: req.params.idquiz, user: req.params.iduser }, req.body, function (err, data) {
            if (err) {
                return res.status(500).send("Erreur interne");
            } else {
                if (data) {
                    return res.status(200).json(req.body);
                } else {
                    return res.status(400).send("Aucune donnée trouvée avec ces ID")
                }
            }
        });
    } else {
        return res.status(400).send("Champs manquants");
    }
}

exports.create = create;
exports.getAll = getAll;
exports.getById = getById;
exports.getByQuiz = getByQuiz;
exports.getByUser = getByUser;
exports.updateOne = updateOne;
exports.updateQuizUser = updateQuizUser;