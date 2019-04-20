var express = require('express');
var router = express.Router();

// var userModel = require('../models/user');
// var db = require('../common/databasemgdb')
// var conn = db.getConnection();


// router.use('/admin', require(__dirname + '/admin.js'));
// router.use('/blog', require(__dirname + '/blog.js'));

router.get('/', function(req, res) {

    // userModel.create({
    //     name: "Bui Van Han",
    //     user: "buihan998",
    //     pass: "1"
    // });
    // userModel.find().then(function(user){
    //     console.log(user)
    // })

    res.render("home");
});


module.exports = router;