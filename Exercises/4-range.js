'use strict';

const range = (start, end) => {
  const arr = [];
  if (!(start>end)) {
  do{
    arr.push(start);
    start++;
  } while (start<=end);
  }
  return arr;
};

module.exports = { range };
