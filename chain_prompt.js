// Chain Prompting Example
// Prompt: Write a JavaScript function called toKebabCase that converts a given string into kebab-case. 
// Follow these steps sequentially:
// 1. Normalize the Input: Trim whitespace, convert underscores/spaces to hyphens, collapse multiple separators
// 2. Convert to Lowercase and Remove Non-Alphanumerics: Convert to lowercase, remove non-alphanumeric chars (except hyphens)
// 3. Validate and Return Output: Throw error for non-strings, return empty string if result is empty, otherwise return kebab-case string

/**
 * Converts a string to kebab-case format following a sequential chain of operations
 * @param {string} input - The string to convert
 * @returns {string} The kebab-case formatted string
 * @throws {Error} If input is not a valid string
 */
function toKebabCase(input) {
    // Step 1: Normalize the Input
    // Validate input type first
    if (typeof input !== 'string') {
        throw new Error('Input must be a non-empty string');
    }
    
    // Trim any leading or trailing whitespace from the input string
    let normalized = input.trim();
    
    // Convert all underscores _ and spaces to hyphens -
    normalized = normalized.replace(/[_\s]+/g, '-');
    
    // Ensure multiple consecutive hyphens are collapsed into a single hyphen
    normalized = normalized.replace(/-+/g, '-');
    
    // Step 2: Convert to Lowercase and Remove Non-Alphanumerics
    // Convert the entire string to lowercase
    normalized = normalized.toLowerCase();
    
    // Remove or replace any non-alphanumeric characters (excluding hyphens) with nothing
    normalized = normalized.replace(/[^a-z0-9-]/g, '');
    
    // Clean up any leading or trailing hyphens that might have been created
    normalized = normalized.replace(/^-+|-+$/g, '');
    
    // Step 3: Validate and Return Output
    // If the result is an empty string after processing, return an empty string
    if (normalized === '') {
        return '';
    }
    
    // Otherwise, return the final kebab-case string
    return normalized;
}

// Example usage demonstrating the chain of operations:
// toKebabCase("Hello World") // "hello-world"
// toKebabCase(" user_name_example ") // "user-name-example"
// toKebabCase("Multiple   Spaces--And__Underscores") // "multiple-spaces-and-underscores"
// toKebabCase("Special!@#Characters") // "specialcharacters"
// toKebabCase("") // ""
// toKebabCase(123) // throws Error: "Input must be a non-empty string"
