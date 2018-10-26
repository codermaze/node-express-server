var express = require('express');
var app = express();
var port = 3100;
var os = require("os");
var hostname = os.hostname();

// respond with "hello world" when a GET request is made to the homepage
app.get('/ui/app/firstapp', function (req, res) {
  res.send("You are currently accessing firstapp @ host : " + hostname + " - on server " + process.env.APP_SERVER);
});

app.get('/ui/app/secondapp', function (req, res) {
  res.send("You are currently accessing secondapp @ host : " + hostname + " -  on server " + process.env.APP_SERVER);
});

app.get('/ui/app/thirdapp', function (req, res) {
  res.send("You are currently accessing thirdapp @ host : " + hostname + " -  on server " + process.env.APP_SERVER);
});

app.set('port', process.env.PORT || port);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
