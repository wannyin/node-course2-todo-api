const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5a8c7d8871bc6c83670d6d6d';

if(!ObjectID.isValid(id)){
    console.log('id invalid');
}

Todo.find({
    _id : id
}).then((todos)=>{
    console.log(todos);
});

Todo.findOne({
    _id : id
}).then((todo)=>{
    console.log(todo);
});

Todo.findById(id).then((todo)=>{
    console.log(todo);
}).catch((e)=>console.log(e));