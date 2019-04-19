var express = require('express');

var app =express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var view = require(__dirname + '/apps');
app.use(view);

var server = app.listen( process.env.PORT || 3333, function() {
    console.log("server is running on port: ", 3333);
});
