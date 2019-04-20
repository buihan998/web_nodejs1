var express = require('express');
var config = require('config');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
var http = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('trust proxy', 1);
app.use(session({
    secret: config.get('secret_key'),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.set('views', __dirname + "/apps/views");
app.set('view engine', 'ejs');

//satic folder
app.use('/static', express.static(__dirname + '/public'));

var controllerss = require(__dirname + '/apps/controllers');

app.use(controllerss);

var host = config.get('server.host');
var port = config.get('server.post');

app.listen(process.env.PORT || port, function() {
    console.log("server is running on port: ", port);
});
