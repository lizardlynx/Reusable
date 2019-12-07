'use strict';

const square = (x) => x*x;

const cube = (x) => x**3;

const average = (a, b) => (a+b)/2;

const calculate = () =>{
  let arr = [];
  for (let i=0; i<=9; ++i) {
    arr.push(average(cube(i), square(i)));
  }
  return arr;
};

module.exports = { square, cube, average, calculate };
