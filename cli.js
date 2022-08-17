#!/usr/bin/env node
const semicolonize = require('semicolonizer');
const file = process.argv[2];
try {
    semicolonize(file);
} catch (error) {
    console.error(error);
}