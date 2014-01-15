'use strict';

var strValue = String.prototype.valueOf;

module.exports = function isString(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
