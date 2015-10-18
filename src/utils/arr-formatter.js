/**
 * Copyright (C) 2014-2015, Michiel Sikma <michiel@sikma.org>
 * MIT License
 *
 * src/utils/arr-formatter.js - custom formatter for argparse that supports
 * an array argument. ES5 code, since this runs before Babel is loaded.
 */

var argparse = require('argparse');

/**
 * Extension of the HelpFormatter which is able to accept an array as the
 * 'description' argument. When an array is used, every string in the array
 * becomes a separate paragraph in the description output.
 *
 * @type {Object}
 */
var ArrFormatter = {};
ArrFormatter.prototype = argparse.HelpFormatter.prototype;
ArrFormatter.prototype._addText = ArrFormatter.prototype.addText;
ArrFormatter.prototype.addText = function addText(text) {
  var n;
  if (!text) {
    return;
  }
  if (text.constructor !== Array) {
    this._addText(text);
  }
  else {
    // If this is an array, add multiple sections.
    for (n = 0; n < text.length; ++n) {
      this._addText(text[n]);
    }
  }
};

module.exports = ArrFormatter;
