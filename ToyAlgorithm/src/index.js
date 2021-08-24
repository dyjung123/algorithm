'use strict'

const MyQueue = require('./customQueue/myQueue');

let customQueue = new MyQueue();
customQueue.push(342);
console.log(customQueue.pop());
customQueue.push(2);
customQueue.push(3);
customQueue.push('string');

console.log(customQueue.pop());
console.log(customQueue.pop());
console.log(customQueue.pop());
