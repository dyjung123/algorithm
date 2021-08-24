'use strict'

const QueueElement = require('./queueElement');

class MyQueue {

  constructor() {
    this._start = null;
    this._end = null;
  }

  push(value) {
    let pushElement = new QueueElement(value);
    if (this.isEmpty()) {
      this._start = pushElement;
      this._end = pushElement;
    } else {
      this._end.next = pushElement;
      this._end = this._end.next;
    }
  }

  pop() {
    if (this.isEmpty()) throw new Error('Pop Empty Queue');

    let popElement = this._start.value;
    if (this._start === this._end) this._end = null;
    this._start = this._start.next;
    return popElement;
  }

  isEmpty() {
    return !this._start && !this._end;
  }

}

module.exports = MyQueue;
