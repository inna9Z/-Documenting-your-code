/**
 * removeWords Function
 *
 * This function removes the specified words from the given subject string and returns a new string.
 * A word is defined as a string of characters bound by word boundaries (\b).
 * For example, if the subjectString is "I like apple juice" and wordsToRemove is ["app", "juice"],
 * only "juice" will be removed because "app" is not bound by a word boundary.
 *
 * @param {String} subjectString - The string from which the specified words will be removed. If a value other than a String type is provided, it will be cast to a String.
 * @param {Array} wordsToRemove - An array of words to be removed. An empty or null array will result in no words being removed.
 * @returns {String} - The modified string with the specified words removed.
 */
function removeWords(subjectString, wordsToRemove) {
  // Logic to remove the specified words from the subject string and return the modified string
}

// Example usage
const subjectString = "I like apple juice";
const wordsToRemove = ["app", "juice"];

const result = removeWords(subjectString, wordsToRemove);
console.log(result);
// Output: "I like apple"
