var express = require('express');
var app = express();
let absolutePath = __dirname + "/views/index.html"
// require('dotenv').config()
 
app.use(express.static(__dirname + "/public"));

//console.log("Hello World")
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  res.json({"message": process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON": "Hello json"})
})
 module.exports = app;

