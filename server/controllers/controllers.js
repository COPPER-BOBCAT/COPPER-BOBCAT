var db = require('../db/indexDB.js');
// var bluebird = require('bluebird');


module.exports = {
  questions: {
    get: function (req, res) {
      db.Question.findAll({include: [db.User]})
        .complete(function(err, results){
          // optional mapping step
          res.json(results);
        });
    },
    // post: function (req, res) {
    //   db.User.findOrCreate({where: {username: req.body.username}})
    //     .complete(function(err, results){
    //       db.Question.create({
           
    //       }).complete(function(err, results){
    //         res.sendStatus(201);
    //       });
    //     });
    // }
  },

  users: {
    get: function (req, res) {
      db.User.findAll()
        .complete(function(err, results){
          res.json(results);
        });
    },
    post: function (req, res) {
      db.User.create({
        username: req.body.username
      }).complete(function(err, results){
        res.sendStatus(201);
      });
    }
  }
};