// Refined Prompting Example
// Prompt: Write a JavaScript function toCamelCase that converts a given string into camelCase. 
// The function should:
// - Handle strings with spaces, hyphens, underscores, or mixed separators
// - Ignore leading/trailing whitespace and collapse multiple separators
// - Handle edge cases like empty strings, single-word inputs, numbers within words, or mixed casing
// - Return an empty string if the input is empty
// - Throw an error if the input is not a string
// - Include inline comments and examples

/**
 * Converts a string to camelCase format
 * @param {string} input - The string to convert
 * @returns {string} The camelCase formatted string
 * @throws {Error} If input is not a string
 */
function toCamelCase(input) {
    // Validate input type
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    
    // Handle empty string
    if (input.trim() === '') {
        return '';
    }
    
    // Normalize the string: trim whitespace and handle multiple separators
    const normalized = input
        .trim()
        .replace(/[\s\-_]+/g, ' '); // Replace separators with single space
    
    // Split by spaces and convert to camelCase
    return normalized
        .split(' ')
        .map((word, index) => {
            if (!word) return ''; // Skip empty words
            
            if (index === 0) {
                // First word is lowercase
                return word.toLowerCase();
            } else {
                // Subsequent words: capitalize first letter, lowercase the rest
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        })
        .join('');
}

// Context-aware dot.case function (using patterns from toCamelCase)
/**
 * Converts a string to dot.case format
 * @param {string} input - The string to convert
 * @returns {string} The dot.case formatted string
 * @throws {Error} If input is not a string
 */
function toDotCase(input) {
    // Validate input type (following same pattern as toCamelCase)
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    
    // Handle empty string
    if (input.trim() === '') {
        return '';
    }
    
    // Normalize and convert to dot.case
    return input
        .trim()
        .replace(/[\s\-_]+/g, '.') // Replace separators with dots
        .toLowerCase();
}

// Example usage with error handling:
// toCamelCase("hello world") // "helloWorld"
// toCamelCase(" user-name_example ") // "userNameExample"
// toCamelCase("") // ""
// toCamelCase(42) // throws Error: "Input must be a string"

// toDotCase("hello world") // "hello.world"
// toDotCase(" user-name_example ") // "user.name.example"
