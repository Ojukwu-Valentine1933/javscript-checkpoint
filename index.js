//REVERSE FUNCTION//
var originalString = "Cooking"
function reverseString(reversed) {
    return reversed.split("").reverse().join(""); 
}
console.log(reverseString(originalString));
/**
 * the code above has three inbuilt functions: split, reverse and join;
 * The split function is used to convert all strings into individual characters
 * The reverse function is used to  reverse the order of elements inside an array
 * Finally, the join function is used to concatinate all of the elements back into a string
 */

//CHARACTER COUNT//
function countCharacters(str) {
    // Check if the input is a string
    if (typeof str !== 'string') {
        return 'Input is not a string';
    }
    
    // Return the length of the string
    return str.length;
}


console.log(countCharacters("Hello, world!"));
/**
 * This function countCharacters takes a string str as input and returns the number of characters in that string using the length property. It also includes a check to ensure that the input is indeed a string.
 */


//WORD CAPITALIZATION
function capitalizeWords(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');
    
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    // Join the words back into a sentence
    return capitalizedWords.join(' ');
}


console.log(capitalizeWords("hello world")); 
/**
 * This function capitalizeWords takes a sentence as input, splits it into an array of words using the split method, capitalizes the first letter of each word using the toUpperCase method, and then joins the words back into a sentence using the join method.
 */


//FINDING OF MAXIMUM//
function findMaximum(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined if array is empty
    }
    return Math.max(...arr); // Using spread operator to pass elements of array to Math.max
}


//FINDING OF MINIMUM//
function findMinimum(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined if array is empty
    }
    return Math.min(...arr); // Using spread operator to pass elements of array to Math.min
}


const numbers = [5, 2, 8, 1, 10];
console.log(findMaximum(numbers)); 
console.log(findMinimum(numbers)); 


//ARRAY SUMING//
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0); // Using reduce to sum elements of array
}


console.log(sumArray(numbers));

//ARRAY FILTERING//
function filterArray(arr, condition) {
    return arr.filter(condition); // Using filter to filter out elements based on the given condition
}


const evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers); 


//FACTORIAL//
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


console.log(factorial(5));

//PRIME NUMBER CHECK
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(isPrime(17)); // Output: true


//FIBONACCI SEQUENCE
function fibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Example usage:
console.log(fibonacciSequence(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


