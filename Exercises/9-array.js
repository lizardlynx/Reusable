'use strict';

const phonebook = [{ name: 'Marcus Aurelius', phone: '+380445554433' }, { name: 'Avatar', phone: '+380999'}];

const findPhoneByName = (name) => {
  for (let item of phonebook) {
    if(item[name]===name) return item[name];
  }
};

module.exports = { phonebook, findPhoneByName };
