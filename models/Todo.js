var uuid = require('uuid');

// construction function
// how do I build this object?
function Todo(description){
  this.id = uuid.v4();
  this.description = description;
  this.isComplete = false;
}

// var todo1 = new Todo('read you dont know js');
// var todo2 = new Todo('practice programming');
// var todo3 = new Todo('go running');
//
// console.log(todo1);
// console.log(todo2);
// console.log(todo3);
module.exports = Todo;
