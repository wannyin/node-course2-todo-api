//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect.');
    }

    console.log('Connected.');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a8c4bc62714346658559a75')
    },{
        $set:{
            completed: false
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    //db.close();
});