'use strict';

// Counting Sheep

const countingSheep = num => {
  for (let i = num; i > 0; i--) {
    console.log(`${i} -Another Sheep jump the fence`);
  }
};

// countingSheep(3);

// Array Double

const arrayDouble = array => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i] * 2);
  }
  return newArr;
};

// console.log(arrayDouble([1, 2, 3]));

const reverseString = string => {
  let newString = '';
  for (let i = string.length; i > 0; i--) {
    newString = newString + string[i - 1];
  }
  return newString;
};

// console.log(reverseString('OHMYGODANOTHERSTRING'));

const nthTriangularNumber = num => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    i === 1 ? arr.push(1) : arr.push(i * (i + 1) / 2);
  }
  return arr;
};

// console.log(nthTriangularNumber(10));

const stringSplitter = (string, separator) => {
  const arr = [];
  for (let i = 0; i < string.length; i++) {

  }
  return arr;
};