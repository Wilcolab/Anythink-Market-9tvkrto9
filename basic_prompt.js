// One-Shot Prompting Example
// Prompt: Write a function called toCamelCase that converts strings to camelCase. 
// For example, toCamelCase("hello world") should return "helloWorld".

function toCamelCase(str) {
    return str
        .split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// toCamelCase("hello world") // returns "helloWorld"
// toCamelCase("user name") // returns "userName"
