// Access Object Keys: 
Object.getOwnPropertyNames(obj);
Object.keys()
// both returns the same values in an array

function listAllKeys(obj) {
  let arr = [];
  for (let i in objs) { // use of for.. in loops to loop through objects
    arr.push(i);
  }
  return arr;
}

function fromListToObject(array) {
  let obj = {};
  array.forEach(function(array) { // forEach function loops through arrays but does not return values
    obj[arr[0]] = arr[1];
  })
  return obj;
}

// Access Object Values:
function listAllValues(obj) {
  return Object.values(obj); // returns as an array
}

function listAllValues(obj) {
  let arr = [];
  for (let i in obj) {
    arr.push(obj[i]);
  }
  return arr;
}

function convertObjectToList(obj) {
  return Object.entries(obj); // returns an array of tuples containing the object's keys and values
}

function removeProperty(obj, key) {
  delete obj[key];
}

function getFullName(firstName, lastName) {
  let fullName = Array.from(arguments);
  return fullName.join(' '); //concat does not create space
}

function cube(num) {
  return Math.pow(num, 3);
}

function addToFront(arr, element) {
    arr.unshift(element); // unshift adds to the front
} // shift deletes from the front

function computeSquareRoot(num) {
    return Math.sqrt(num);
}

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function getElementsUpTo(array, n) {
    return array.slice(0, n); // does not include last element
}

function getAllElementsButFirst(array) {
    return array.slice(1);
}

function getAllElementsButLast(array) {
    return array.slice(0, -1) // OR array.pop()
}

function removeFromFront(arr) {
    arr.slice(1); // OR arr.shift()
}

function removeFromBackOfNew(arr) {
    return arr.slice(0, -1);
}

function removeFromFrontOfNew(arr) {
    return arr.slice(1);
}

function getAllLetters(str) {
    return str.split('');
}I

function getAllWords(str) {
    return str.split(' ');
}

function removeElement(array, discarder) {
  return array.filter(function(number) { // filters for numbers that return true
    return number !== discarder; 
  })
}

function repeatString(string, num) {
  return string.repeat(num); //repeat method; no spaces included
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*************************/

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('Passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '], expected + [' + expected + '], but was returned [' + actual + ']');
  }
}

function assertArraysEqual(actual, expected, testName) {
  const areEqualLengths = actual.length === expected.length;
  const areEqualItems = actual.every(function(item, i) {
    return item === expected[i];
  })
  if (areEqualItems && areEqualLengths) {
    console.log('Passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '],  expected + [' + expected + '], but was returned [' + actual + ']');
  }
}

function assertObjectsEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('Passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '], expected + [' + expected + '], but was returned [' + actual + ']');
  }
}

function assertWithinRange(low, high, actual, testName) {
  if (typeof low !== 'number' || typeof high !== 'number') {
    console.log('Only number parameters are allowed');
  } else {
    if (actual >= low && actual <= high) {
      console.log('Passed [' + testName + ']');
    } else {
      console.log('FAILED [' + testName + '],  expected numbers between ' + low + ' and ' + high + ' but was returned [' + actual + ']');
    }
  }
}
