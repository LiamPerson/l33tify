# l33tify
Convert arrays of normal words into 4rr4yz 0f l33t w0rdz!

*English Translation:*
> Converts arrays of normal words into arrays of leet-speak words.

<hr>

Built for use in NodeJS although you can modify 
```js
module.exports = l33tify;
``` 
to 
```js
export default l33tify;
```
to use this in any JavaScript application.


# Example usage:
```js
const l33tify = require('./l33tify'); // Require the .js file
const boringWords = ["cat", "dog", "house"];
console.log("Fun words:", l33tify(boringWords));
/*
Fun words: [
  'cat',   'dog',   'house', 'ca+',   'ca7',   'c4t',   'c*t',  
  'c47',   'c@7',   'c*+',   'c@+',   'c@t',   'c4+',   'c*7',  
  'd0g',   'do6',   'd06',   'd*6',   'd*g',   'h*uz3', 'h0uz*',
  'h*us3', 'ho*5e', 'ho*s3', 'ho*se', 'h*u$*', 'h**$3', 'houze',
  'h0*se', 'houz3', 'h0vs*', 'hov$*', 'hou53', 'h0vz3', 'h*us*',
  'hovs3', 'hovze', 'h*u$e', 'ho4s*', 'h0use', 'h0us3', 'h*4se',
  'ho4ze', 'h**s3', 'hovse', 'h0vse', 'houz*', 'h*u5e', 'hou$3',
  'h*4s3', 'hous*', 'hov$3', 'h0u$*', 'h*v5e', 'hovz3', 'h*use',
  'h0*s*', 'hou$e', 'ho*$e', 'h*vs*', 'h*v$3', 'h*45e', 'hov5*',
  'h04ze', 'h0*z3', 'h*uze', 'h*uz*', 'hou5*', 'h**$e', 'h*v$e',
  'h*vse', 'ho4se', 'h0us*', 'h0u5*', 'hou5e', 'hov5e', 'hov$e',
  'hovs*', 'ho45e', 'h0uze', 'h04$e', 'h**se', 'h0*z*', 'h04s3',
  'ho45*', 'h**z*', 'h0*$3', 'h0v$e', 'hous3', 'h04se', 'ho4$e',
  'h0*$e', 'hou$*', 'h045e', 'ho*$3', 'h*vze', 'h*4s*', 'ho*s*',
  'ho*ze', 'h*4ze',
  ... 51 more items
]
*/
```

# Modifying for your own use
Letters are converted based on the dictionary. The dictionary is found in `l33tify.js` and you can add or remove letter translations by 
adding or removing to the **d1ct10n4ry** object.
