var express = require('express');
var server = (express());
var bodyParser = require('body-parser');
var lowdb = require('lowdb');
var uuid = require('uuid');

var port = process.env.PORT || 8080
var db = lowdb('db.json');

// database initialization
db.defaults({todos: []})
// .value() runs the previous set of commands
  .value();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/todos', function(request, response){
  var todos = db.read('db.json');
  response.send(todos);
})

server.get('/todos/:id', function(request, response){
  response.send("GET todos :id");
})

server.post('/todos', function(request, response){
  var todo = {
    id: uuid.v4(),
    description: request.body.description,
    isComplete: false
  };

  var result = db.get('todos')
                 .push(todo)
                 .last()
                 .value();
  response.send(result);
});

server.put('/todos/:id', function(request, response){
  response.send("PUT todos :id");
})

server.delete('/todos/:id', function(request, response){
  response.send("DELETE todos :id");
})

server.listen(port, function(){
  console.log('Now listening to port:', port);
});
