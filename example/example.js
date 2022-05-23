/**
 * Example bad words generator. Run `node example.js` in this folder to build l33t.txt
 */
const fs = require("fs");
const l33tify = require('../l33tify');

// Get words as array
const fileData = fs.readFileSync("./en.txt", 'utf-8').toLowerCase();
const words = fileData.split(/\r?\n/g);

// Write l33tified words to l33t.txt
fs.writeFileSync("./l33t.txt", l33tify(words).sort().join("\n"));