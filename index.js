'use strict';

var strValue = String.prototype.valueOf;

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
