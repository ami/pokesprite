#!/usr/bin/env node
/**
 * Copyright (C) 2014-2015, Michiel Sikma <michiel@sikma.org>
 * MIT License
 */

// Load the program's accepted argument definitions,
// and the available scripts.
var runParser = require('./src/utils/run-parser');

// Parse command-line arguments, then kickstart the script using Babel.
global.__ARGS__ = runParser.getParsedArgs();
require('babel/register')({'stage': 0});
require('./src/generate.js');
