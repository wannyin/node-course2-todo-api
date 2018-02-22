// const {SHA256} = require('crypto-js');

// var message = 'Hello world';
// var hash = SHA256(message).toString();

// console.log(message);
// console.log(hash);



const jwt = require('jsonwebtoken');

// jwt.sign
// jwt.verify

var data = {id:10};
var token = jwt.sign(data, '123');
console.log(token);

var token2 = jwt.sign(data, '123');
console.log(token2);

// var decode = jwt.verify(token, '123');
// console.log(decode);

const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, (err, salt)=>{
    bcrypt.hash(password, salt, (err, hash)=>{
        console.log(hash);
    })
})

bcrypt.compare(password, "$2a$10$XOYr3m/DQIlkzOZ9y5MJfObjFQx2jMk5DT/1H2vHsACmfbvIql64i", (err,res)=>{
    console.log(res);
})