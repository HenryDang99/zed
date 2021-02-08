var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var controllers = require('./controllers');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))

controllers.init(app);

app.listen(3000);