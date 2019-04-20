var mongoose =  require('mongoose');

var userModel = new mongoose.Schema({
    name: String,
    user: String,
    pass: String
});

var user = mongoose.model("user", userModel, "user");

module.exports = user;







// var q = require('q');
// var db = require("../common/databasemgdb");

// var conn = db.getConnection();
// var schema= db.getSchema();

// function getuser() {

//     var users = new schema({
//         name: String,
//         user: String,
//         pass: String,
//     });

//     var defer = q.defer();


//     var taikhoan = conn.model('taikhoans', users);

//     taikhoan.create({
//         name: "Nguyen Van A",
//         user: "vana",
//         pass: "1"
//     }).save;

//     // usersadd.save()

//     var taikhoan = taikhoan.find({}).exec(function(err, result) {
//         // console.log(result);
//         if (err) {
//             defer.reject(err);
//         } else {
//             defer.resolve(result);
//         }
//     });

//     return defer.promise;
// }

// module.exports = {
//     getuser: getuser
// }