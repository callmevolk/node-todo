// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to the server');
  }
  console.log('success');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat luch'}).then((res) => {
  //   console.log(res);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'eat'}).then((res) => {
  //   console.log(res);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res.value);
  // });

  // db.collection('Users').deleteMany({name: 'Ljubisa'}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Users').findOneAndDelete({name: 'Andrew'}).then((res) => {
  //   console.log(res.value);
  // });

  db.collection('Users').deleteOne({_id: new ObjectID("5b295fbf8e1f621a54754a9f")}).then((res) => {
    console.log(res);
  });

  // db.close();
});