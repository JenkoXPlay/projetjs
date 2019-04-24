const express = require("express");
const router = require('./router');
const cors = require('cors');
const bodyParser = require('body-parser');
const register = require('./function/register');

const app = express();

const port = 8081;

//Body Parser
var urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

// création des routes pour la bdd
app.use('/register', register.register);

app.use(cors());
app.use(router).listen(port, () => console.log('Example app listening on port ' + port));