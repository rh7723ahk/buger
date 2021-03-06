var orm = require("../config/orm.js");


var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(val, cb) {
    orm.insertOne(val, function(res) {
      cb(res);
    });
  },
  updateOne: function(val, cb) {
    orm.updateOne("burgers", function(res) {
      cb(res);
    });
  }
};


module.exports = burger;