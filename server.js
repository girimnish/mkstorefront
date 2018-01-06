var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var proxy = require("express-http-proxy");
app = express();
app.use("/api" , proxy('https://merokinmel.herokuapp.com/'))
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);