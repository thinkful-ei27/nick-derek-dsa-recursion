'use strict';

//Counting Sheep

//Input: Number of Sheep
//Output: Console Log num Another Sheep Jump The Fence
function countingSheep(num) {
  //base case
  if (num === 0) {
    return console.log('All the sheep have jumped the fence');
  } else {
    //recursive case
    console.log(`${num} -Another Sheep jump the fence`);
    return countingSheep(num - 1);
  }
}

// countingSheep(3);

//Array Double

//Input: Array (unknown set of numbers)
//Output: Array of numbers doubled
//Will assume it's an array of numbers
function arrayDouble(array) {
  //base case
  if (array.length === 0) {
    return [];
  } else {
    return [array[0] * 2, ...arrayDouble(array.slice(1))];
  }
}

// console.log(arrayDouble([1, 2, 3]));
// console.log(arrayDouble([4, 5, 6]));

//Input: String
//Output: String reversed

function reverseString(string) {
  //base case
  if (string === '') {
    return '';
  } else {
    //recursive case
    return reverseString(string.slice(1)) + string[0];
  }
}

// console.log(reverseString('RECURSIVESAREFUNOHMYGOD'));
//1, 3, 6, 10, 15, 21, 28
//Input: 
//Output:
//Assumption: num is greater than 0
function nthTriangularNumber(num) {
  if (num <= 0)
    return Error('Must be greater than 0');
  else if (num === 1) {
    return [1];
  }
  else {
    return [...nthTriangularNumber(num - 1), (num * (num + 1) / 2)];
  }
}

// console.log(nthTriangularNumber(10));

// String Splitter
const stringSplitter = (string, separator) => {
  const index = string.indexOf(separator);
  if (index < 0) {
    return [string];
  } else {
    return [string.slice(0, index), ...stringSplitter(string.slice(index + 1), separator)];
  }
};

// console.log(stringSplitter('This is a sample string', ' '));
// console.log(stringSplitter('This is a sample string', 'i'));

// Binary Representation

//input will be a decimal
//output will be a binary string

const toBinary = (num) => {
  //base case
  if (num === 0)
    return '';
  else {
    const binary = String(Math.floor(num % 2));
    return toBinary(Math.floor(num / 2)) + binary;
  }
  //recursive case
}

// console.log(toBinary(10));
// console.log(toBinary(3));
// console.log(toBinary(25));

// Factorial
const factorial = num => {
  if (num < 0) {
    return 'Number should greater than or equal to zero';
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// console.log(factorial(5));

// Fibonacci
const fibonacci = num => {
  if (num < 0) {
    return 'Number should greater than or equal to zero';
  } else if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

const fibonacciSeq = num => {
  if (num < 0) {
    return 'Number should be greater than or equal to zero';
  } else if (num === 0) {
    return '0';
  } else if (num === 1) {
    return '1';
  } else {
    return fibonacciSeq(num - 1) + ' ' + String(fibonacci(num));
  }
};

// console.log(fibonacciSeq(100))

//anagrams

//input: String of word or phrase
//output: array of strings of all the anagrams (EAST => ASTE, TSAE, etc.)

const anagrams = (string, prefix = '') => {
  //base case
  if (string.length <= 1)
    return string;
  else {
    const stringArr = string.split('');
    const arr = [];
    stringArr.forEach((letter, index) => {
      arr.push(prefix);
      anagrams(stringArr.splice(index, 1), prefix);
    });
    return arr;
  }
};

console.log(anagrams('fart'));