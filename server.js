var express = require("express");
var metho = require("method-override");
var bodyParser = require("body-parser");

var app = express();


var port = process.env.PORT || 3000;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller.js");

app.use("/", router);


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.getElementsByTagName('')