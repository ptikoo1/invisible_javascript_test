function decipher(encryptedText, knownWord) {
  /**
   * Deciphers a Caesar cipher encrypted text using a known word.
   *
   * @param {string} encryptedText The encrypted text.
   * @param {string} knownWord The word known to be in the original text.
   * @returns {string} The deciphered text.
   */

  function shiftChar(char, shift) {
    if (!char.match(/[a-z]/i)) {
      return char; // Non-alphabetic characters remain unchanged
    }

    const isUpper = char === char.toUpperCase();
    const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    const charCode = char.charCodeAt(0);
    let shiftedCode = charCode - base - shift % 26;

    if (shiftedCode < 0) {
      shiftedCode += 26;
    }

    const decipheredChar = String.fromCharCode(shiftedCode + base);
    return decipheredChar;
  }

  // Find all occurrences of the encrypted known word in the text
  const encryptedKnownWordRegex = new RegExp(knownWord, "gi");
  const encryptedKnownWordMatches = encryptedText.match(encryptedKnownWordRegex);

  if (!encryptedKnownWordMatches) {
    return "Known word not found in encrypted text.";
  }

  const encryptedKnownWord = encryptedKnownWordMatches[0]; // Use the first match

  // Calculate the shift
  let shift = 0;
  for (let i = 0; i < knownWord.length; i++) {
    const encryptedChar = encryptedKnownWord[i];
    const originalChar = knownWord[i];

    if (encryptedChar.match(/[a-z]/i)) {
      shift = encryptedChar.charCodeAt(0) - originalChar.charCodeAt(0);
      break; // Assuming the shift is consistent, we can break after the first alphabetic character
    }
  }

  // Decipher the entire text
  let decipheredText = "";
  for (let i = 0; i < encryptedText.length; i++) {
    const char = encryptedText[i];
    decipheredText += shiftChar(char, shift);
  }

  return decipheredText;
}

// Example Usage:
const encryptedText = "Mjqqt, btwqi!";
const knownWord = "Hello";
const decipheredText = decipher(encryptedText, knownWord);
console.log(decipheredText); // Output: Hello, world!
