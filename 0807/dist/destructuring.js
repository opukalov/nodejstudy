'use strict';

var user = {
    firstname: 'John',
    lastname: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

var first = user.firstname,
    last = user.lastname,
    _user$age = user.age,
    age = _user$age === undefined ? 25 : _user$age;


console.log(first, last, age);