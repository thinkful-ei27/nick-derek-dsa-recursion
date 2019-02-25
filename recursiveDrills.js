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

const anagrams = (string) => {
  let results = [];
  if (string.length <= 1)
    return [string];
  else {
    const stringArray = string.split('');
    stringArray.forEach((letter, index) => {
      let charLeft = [...stringArray.slice(0, index), ...stringArray.slice(index + 1)].join('');
      const innerPermuations = anagrams(charLeft);
      innerPermuations.forEach(permutation => {
        results.push(letter + permutation);
      });
    });
  }
  return results;
};

// console.log(anagrams('abcd'));
// console.log(anagrams('car'));

//Animal Hierarchy
// Input to the progam: Array of objects and a parent.
// Input to each recursive call: Same array of objects and the id of the filtered item.
// Output of each recursive call: An object with keys matching the child ids. Each key has a value of the node below it.
// Output of the program: Nested object with children under their parents.

// const animalHierarchy = [
//   { id: 'Animals', parent: null },
//   { id: 'Mammals', parent: 'Animals' },
//   { id: 'Dogs', parent: 'Mammals' },
//   { id: 'Cats', parent: 'Mammals' },
//   { id: 'Golden Retriever', parent: 'Dogs' },
//   { id: 'Husky', parent: 'Dogs' },
//   { id: 'Bengal', parent: 'Cats' }
// ];

// // ==============================
// function traverse(animalHierarchy, parent) {
//   let node = {};
//   animalHierarchy.filter(item => item.parent === parent)
//     .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
//   return node;
// }
// console.log(traverse(animalHierarchy, null));

// Organization Chart for... Facebook?

//input array of objects for the staff
//output a nexted object tree
//base: when a parent has no children
//recursive finding all the children of the parent, and then finding the children of the children

const facebookHeirarchy = [
  {name: 'Zuckerbug', boss: null},
  {name: 'Schroepfer', boss: 'Zuckerbug'},
  {name: 'Schrage', boss: 'Zuckerbug'},
  {name: 'Sandberg', boss: 'Zuckerbug'},
  {name: 'Bosworth', boss: 'Schroepfer'},
  {name: 'Zhao', boss: 'Schroepfer'},
  {name: 'Steve', boss: 'Bosworth'},
  {name: 'Kyle', boss: 'Bosworth'},
  {name: 'Andra', boss: 'Bosworth'},
  {name: 'Richie', boss: 'Zhao'},
  {name: 'Sofia', boss: 'Zhao'},
  {name: 'Jen', boss: 'Zhao'},
  {name: 'VanDyck', boss: 'Schrage'},
  {name: 'Sabrina', boss: 'VanDyck'},
  {name: 'Michelle', boss: 'VanDyck'},
  {name: 'Josh', boss: 'VanDyck'},
  {name: 'Swain', boss: 'Schrage'},
  {name: 'Blanch', boss: 'Swain'},
  {name: 'Tom', boss: 'Swain'},
  {name: 'Joe', boss: 'Swain'},
  {name: 'Goler', boss: 'Sandberg'},
  {name: 'Eddie', boss: 'Goler'},
  {name: 'Julie', boss: 'Goler'},
  {name: 'Annie', boss: 'Goler'},
  {name: 'Hernandez', boss: 'Sandberg'},
  {name: 'Rowi', boss: 'Hernandez'},
  {name: 'Inga', boss: 'Hernandez'},
  {name: 'Morgan', boss: 'Hernandez'},
  {name: 'Moissinac', boss: 'Sandberg'},
  {name: 'Amy', boss: 'Moissinac'},
  {name: 'Chuck', boss: 'Moissinac'},
  {name: 'Vinni', boss: 'Moissinac'},
  {name: 'Kelley', boss: 'Sandberg'},
  {name: 'Eric', boss: 'Kelley'},
  {name: 'Ana', boss: 'Kelley'},
  {name: 'Wes', boss: 'Kelley'}
]

// \n is line break

const organizationChart = (array, boss) => {
    let string = ``;
    array.filter(person => person.boss === boss)
      .forEach(person => {
        string = `${string} ${person.name} ${organizationChart(array, person.name)}`; 
        // = organizationChart(array, person.name)
      })
    return string;
}

console.log(organizationChart(facebookHeirarchy, null));