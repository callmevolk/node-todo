// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to the server');
  }
  console.log('success');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('error encountered, err');
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Ljubisa',
    age: 20,
    location: 'Prnjavor'
  }, (err, result) => {
    if (err) {
      return console.log('error encountered sadly');
    }

    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});