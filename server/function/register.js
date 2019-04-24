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
            }
        }).then(function () {
            var newUser = new User(user);
            newUser.save(function (err, user) {
                if (err) {
                    return res.status(500).send("Erreur interne");
                } else {
                    return res.status(200).send("Utilisateur ajouté !");
                }
            });
        });
    }
}

exports.register = register;