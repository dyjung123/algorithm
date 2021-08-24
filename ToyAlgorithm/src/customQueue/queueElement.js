'use strict'

class QueueElement {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  set next(next) {
    this._next = next;
  }
}

module.exports = QueueElement;
