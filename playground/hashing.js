const {SHA256} = require('crypto-js');

var message = 'Hello world';
var hash = SHA256(message).toString();

console.log(message);
console.log(hash);



const jwt = require('jsonwebtoken');

// jwt.sign
// jwt.verify

var data = {id:10};
var token = jwt.sign(data, '123');
// console.log(token);

var decode = jwt.verify(token, '123');
console.log(decode);
