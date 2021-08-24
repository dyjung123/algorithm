const sum = (x) => (y) => (z) => {
  return x+y+z;
}

const mysum = function(x) {
  return function(y) {
    return x+y;
  }
}

// high order function
// const sum5 = sum(5);

// console.log(sum5(123));
const tmp = mysum(5);
console.log(tmp(12));