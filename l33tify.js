/**
 * Randomly l33ts words in a list.
 * @param {Array} array
 * @param {Number} accuracy How many parses you want to have the word undergo in the l33t generator. The higher the more accurate.
 * @returns {Array}
 */
function l33tify(array, accuracy = 1000) {
    let wordList = new Set([...array]);
    // for(let i = 0; i < 10; i++) {
        // Get a large sample of combinations for a word:
        for(const word of array) {
            const combinations = l33tC0mb0z(word, accuracy);
            for(const combination of combinations) {
                wordList.add(combination)
            }
            // wordList.add(...l33tC0mb0z(word));
        }
        // console.log(wordList);
        // const tempWordList = array.map(word => r4nd0ml33t(word));
        // console.log(tempWordList);
        // wordList = [...new Set([...wordList, ...tempWordList])];
    // }
    return [...wordList];
}

/**
 * Tries to create all the possible combinations of l33t sp33k for a word.
 * @param {String} word 
 * @param {Number} iterations How many parses you want to have the word undergo. The higher the more accurate.
 * @returns {Array}
 */
function l33tC0mb0z(word, iterations = 1000) {
    let wordList = new Set([word]);
    for (let i = 0; i < iterations; i++) {
        wordList.add(r4nd0ml33t(word));
    }
    return [...wordList];
}

/**
 * Randomly makes a w0rd
 * @param {String} word 
 * @returns {String}
 */
function r4nd0ml33t(word) {
    // For each l33t letter
    word = word.toLowerCase();
    for(const letter of Object.keys(d1ct10n4ry)) {
        // randomly convert some of them to l33t.
        if(word.includes(letter)) {
            // console.log("Found l33t letter (" + l3tt3r + ") in word:", word);
            // Get character indexes for the chosen letter
            let letterIndexes = [];
            for(let i = 0; i < word.length; i++) {
                if (word[i] === letter) letterIndexes.push(i);
            }
            // console.log(`Letter (${letter}) indexes for ${word}:`, letterIndexes);
            // Convert chosen letter in random spots.
            const actions = Math.round(Math.random() * letterIndexes.length);
            // console.log(`Performing (${actions}) actions on letter (${letter}) in word (${word}) with letter indexes:`, letterIndexes);
            for(let i = 0; i < actions; i++) {
                const chosenIndex = letterIndexes[Math.floor(Math.random() * letterIndexes.length)];
                const chosenLetterReplacement = d1ct10n4ry[letter][Math.floor(Math.random() * d1ct10n4ry[letter].length)];
                // console.log(`Replacing letter (${letter}) with (${chosenLetterReplacement})`);
                word = setCharAt(word, chosenIndex, chosenLetterReplacement);
                // console.log("New word", word);
            }
        }
    }
    return word;
}

/**
 * Changes a character in a string at the chosen index.
 * @param {String} str 
 * @param {Number} index 
 * @param {String} chr 
 * @returns {String}
 */
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}


/**
 * Letter to l33t dictionary.
 */
const d1ct10n4ry = {
    a: ["4", "@", '*'],
    b: ['8'],
    e: ['3', '*'],
    f: ['ph'],
    g: ['6'],
    i: ["1", "!", "l", "|", '*'],
    l: ["1", "!", "|"],
    o: ['0', '*'],
    s: ['5', 'z', '$'],
    t: ['7', '+'],
    u: ['v', '4', '*'],
}

module.exports = l33tify;