'use strict';

const fn = () => {
  const obj = {name: 'value'};
  let obj2 = {name: 'value'};
  obj.name = 'smth else';
  obj2.name = 'smth else';
  obj2 = {name: 'some new strange code'};
};

module.exports = { fn };
