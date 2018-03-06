
var assert = require('assert');
var validator = require('../index');

describe('Validator', function () {
    describe('#isEmail', function () {
        it('should return true when the string is an email address', function () {
            if (validator.isEmail('foo@bar.net') !== true) {
                throw new Erorr('Validator not right');
            }
        });
    });
});