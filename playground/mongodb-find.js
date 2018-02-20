//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect.');
    }

    console.log('Connected.');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a8c52fe8f64c19f8c519f1c')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log(err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
    }, (err)=>{
        console.log(err);
    });

    db.close();
});