var connection = require("./connection.js");

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }


    return arr.toString();
}

var orm = {


    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


    insertOne: function(val, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
        console.log(queryString);
        connection.query(queryString, [val], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


    updateOne: function(val, cb) {
        var queryString = "UPDATE burgers SET devoured=true WHERE id=?";
        console.log(queryString);
        connection.query(queryString, [val], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;