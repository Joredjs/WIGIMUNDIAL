var http = require("http");
var express = require("express");


express.get();

http.createServer(function (req, res) {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.end("Hola in Browser\n");
}).listen(1906);


console.log("Hola");