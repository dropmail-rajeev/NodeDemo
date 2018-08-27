//Follow below link for complete CRUD operation
//https://www.js-tutorials.com/javascript-tutorial/node-js-rest-api-add-edit-delete-record-mysql-using-express/
var express = require('express');
var app = express();

var server = app.listen(3000,  "127.0.0.1", function () {
  var host = server.address().address
  var port = server.address().port
  console.log("My serve is running at http://%s:%s", host, port)
});

//app.use('/api', route);

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.use('/api/employee', require('./server/Employee'));
app.use('/api/department', require('./server/Department'));

