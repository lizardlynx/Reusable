'use strict';

const rangeOdd = (start, end) => {
    const arr = [];
    if (!(start>end)) {
    do{
      if (!(start%2==0)) {
        arr.push(start);
    }
      start++;
    } while (start<=end);
    }
    return arr;
  };

module.exports = { rangeOdd };
