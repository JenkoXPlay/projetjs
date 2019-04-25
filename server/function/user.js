const User = require('../db/mongoose').users;

function register(req, res) {
    if (!req.body.pseudo || !req.body.password) {
        return res.status(400).send("Erreur champs vides !");
    } else {
        var user = {
            pseudo: req.body.pseudo,
            password: req.body.password
        }
        User.findOne({
            pseudo: user.pseudo
        }, function(err, result) {
            if (err) {
                return res.status(500).send("Erreur interne");
            } else {
                if (result) {
                    return res.status(400).send("Utilisateur déjà présent !");
                } else {
                    var newUser = new User(user);
                    newUser.save(function (err, user) {
                        if (err) {
                            return res.status(500).send("Erreur interne");
                        } else {
                            return res.status(200).send("Utilisateur ajouté !");
                        }
                    });
                }
            }
        });
    }
}

function getAll(req, res) {
    User.find(function (err, data) {
        if (err) {
            return res.status(500).send("Erreur interne");
        } else {
            return res.status(200).json(data);
        }
    });
}

function getId(req, res) {
    User.findById(req.params.id, function (err, data) {
        if (err) {
            return res.status(500).send("Erreur interne");
        } else {
            if (data) {
                return res.status(200).json(data);
            } else {
                return res.status(400).send("Pas de données");
            }
        }
    });
}

function getPseudo(req, res) {
    User.find({ pseudo: req.params.pseudo }, function (err, data) {
        if (err) {
            return res.status(500).send("Erreur interne");
        } else {
            if (data) {
                return res.status(200).json(data);
            } else {
                return res.status(400).send("Pseudo introuvable");
            }
        }
    });
}

function updateOne(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, data) {
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

function deleteOne(req, res) {
    User.findByIdAndRemove(req.params.id, function (err, data) {
        if (err) {
            return res.status(500).send("Erreur interne");
        } else {
            if (data) {
                return res.status(200).json(data);
            } else {
                return res.status(400).send("Utilisateur introuvable");
            }
        }
    });
}

exports.register = register;
exports.getAll = getAll;
exports.getId = getId;
exports.deleteOne = deleteOne;
exports.getPseudo = getPseudo;
exports.updateOne = updateOne;