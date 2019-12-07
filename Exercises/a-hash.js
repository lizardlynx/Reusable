'use strict';

const phonebook = {'Marcus Aurelius': '+380445554433', 'Avatar': '+380999'};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
