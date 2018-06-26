const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var userID = "5b3111e51cfc7a401ab171bc";

if (!ObjectID.isValid(userID)) {
  console.log('ID not valid');
};

User.findById(userID).then((user) => {
  console.log('User', user);
}).catch((e) => {
  console.log(e);
});

// var id = "5b31fed74500c8d01e27162c";

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found!');
//   }
//   console.log('Todo', todo);
// }).catch((e) => {
//   console.log(e);
// });