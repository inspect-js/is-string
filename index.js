'use strict';

var callBound = require('call-bind/callBound');

var $strValueOf = callBound('String.prototype.valueOf');

var tryStringObject = function tryStringObject(value) {
	try {
		$strValueOf(value);
		return true;
	} catch (e) {
		return false;
	}
};
var $toString = callBound('Object.prototype.toString');
var strClass = '[object String]';
var hasToStringTag = require('has-tostringtag/shams')();

module.exports = function isString(value) {
	if (typeof value === 'string') {
		return true;
	}
	if (!value || typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryStringObject(value) : $toString(value) === strClass;
};
