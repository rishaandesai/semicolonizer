#!/usr/bin/env node
const semicolonize = require('semicolonizer');
const file = process.argv[2];
semicolonize(file);