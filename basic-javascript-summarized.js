
function.prototype.call(thisArg, arg1, arg2, ...)
Array.prototype.filter.call([1, 2, 3], function() { })
// multiple independent arguments

function.prototype.apply(thisArg, [argsArray])
Array.prototype.filter.apply([1, 2, 3], [function() { }])
// an array of arguments

Array.prototype.function()

Object.getOwnPropertyNames(obj)
Object.keys(obj)
//returns array of object keys

Object.values(obj)
//returns object values

for (let i in obj)
// loop iterables (usually only objects);
// for..in & Arrays:
// Generally not advised to be used wtih arrays because it cannot guarantee the iteration
// happens in a sequence, which is usually important for arrays
// for..in & Strings:
// Each character in a string has an index. Therefore, similar to arrays, the indexes
// are enumerable properties that just happen to be integers

Object.entries(obj)
// returns array of keys and values
// [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

array.entries()
// returns array of key/value pairs for each index in the array
// [[0, 'a'], [1, 'b'], [2, 'c']]

Object.assign(target, sources)
// merges objects to target; if keys are shared, value will be replaced with last var's key value
// target can equal empty obj {}
// let o1 = { a: 1, b: 1, c: 1 };
// let o2 = { b: 2, c: 2 };
// let o3 = {c: 3};
// var obj = Object.assign(o1, o2, o3) //{a: 1, b: 2, c: 3};
// console.log(o1) //{a: 1, b: 2, c: 3};

obj.hasOwnProperty(key)
// returns a boolean indicating whether or not the object has the specified property as own property.

delete obj[key]
// deletes obj property

/******************************/

Array.isArray(array)
// returns boolean

obj instanceof constructor
// ex: obj[key] instanceof Array
// The instanceof operator tests presence of constructor.prototype in object's prototype chain.

for (let i of array)
// Loop over arrays & strings
// for..of & Objects:
// Doesn't work with objects because they're not "iterable"

num.toString().split('')
// Split numbers into separate digits with indices

let arrOfWords = str.split(' ');
const setOfUniqueWords = new Set(arrOfWords);
// set requires an ARRAY to be created
// creates an OBJECT

str1.concat(str2, str3)
array1.concat(array2, array3)
// does not modify the original arrays/strings

array.copyWtihin(target, start, end)
// target refers to the 0 based index at which to copy the sequence
// start & end refers what is to be copied
// negative numbers will be counted from the end

str.repeat(num)
// no spaces included

array.unshift(element)
// ADDS element to FRONT of array

array.shift()
// REMOVES element from FRONT of array
// returns the element removed

array.push(element)
// ADDS element to BACK of array

array.pop()
// REMOVES element from BACK of array
// returns the element removed

array.slice(start, end)
str.slice(start, end)

slice(1)
// removes the first index & returns the rest of the array/string
// shift() does the same but only for ARRAYS

slice(-1)
// returns the last index of the array/string

slice(0, -1)
// returns string/array with the last index removed
// pop() does the same but only for ARRAYS

array.slice() //creates a copy of the array
// creates a new array & string, not including the last index

array.splice(start, deleteCount, insertValuesHere)
// Splice() – Deletes and/or inserts elements in an array.
// Unlike slice(), the splice() method modifies the original
// array and returns a new array. The Splice() method takes
// three arguments. The first parameter is the index to start
// deleting and/or insert elements, the second param is number
// of elements to remove and third param (optional) is the new
// elements to be added to the array.

array.includes(element)
string.includes('hello')
// returns booleans

array.find(predicateFun)
// returns value of FIRST element in array that passes the predicate function
// otherwise returns undefined

array.findIndex(predicateFun)
// returns index of the FIRST value in array that passes predicate function
// otherwise returns -1

array.lastIndexOf(searchElement)
// returns the last index at which a given element can be found in the array
// starts search from the end of the array
// otherwise returns -1

array.fill(num, startIndex, endIndex)
// returns array filled with num starting between startIndex & endIndex
// startIndex defaults to zero if not set
// endIndex defaults to array.length if not set

Array.of(setOfElements) //Array.of(7) --> [7]
// setOfElements cannot be a variable with the set of lements
// the set of elements (string/numbers) must be inserted directly into the argument
// can take in arrays, objects, and functions to produce an array of its arguments

Array.from(arguments)
Array.from(array)
// creates a copy of the array
Array.from(string) //creates an array out of each string character
// same as str.split('')

// Array.from() has an optional parameter mapFn: Array.from(obj, mapFn, thisArg)
// has the same result as Array.from(obj).map(mapFn, thisArg) except it doesn't create an intermediate array

/********************************/
// STRING --> SPLIT --> CREATES ARRAY

str.split()
// returns entire str in array

str.split('')
// returns ['s','t','r']

/*******************************/
// ARRAY --> JOIN --> CREATES STRING

array.join()
array.toString()
// 'Wind,Rain,Fire'
// no spaces & joined by a comma

array.join('')
// 'WindRainFire'

array.join(' ')
// 'Wind Rain Fire'
// concat does not create space

/********************************/

Math.pow(base, exponent)

Math.sqrt(num)

Math.cbrt(num)

Math.abs(num)

Math.floor(num)

Math.ceil(num)

Math.random()

Math.round(num)
// returns value of number rounded to nearest integer

Math.fround(num)
// returns nearest single precision float number

Math.max(1, 2, 3)
Math.min(1, 2, 3)
// use apply for arrays --> Math.max.apply(Math, array)
// returns NaN if at least one arg cannot be parsed into a number

Number.isInteger(num)
// return boolean (whole number)

parseInt('string', 10)
// string --> whole number
Number('string')
(+'stringNumber')
// string --> number

obj.toString(10)
// number --> string
// obj --> string
// array --> string (separated by ,)


num.toFixed(number)
// The number of digits to appear after the decimal point (rounded)
// returns a string

/********************************/

typeof string === 'string'
typeof boolean === 'boolean'
typeof number === 'number'
typeof functionObj === 'function'
typeof obj === 'obj'

/************************/

// HIGHER ORDER FUNCTIONS
// functions that accept other functions
// enhance the behavior of other functions

/************************/

//CALLBACK FUNCTIONS
//the functions that are passed into higher order functions

/************************/

//THE RETURN STATEMENT
//If you don't return a value at the end of a function,
//it will by default return undefined

/************************/

Rules for 'this' binding:

1. If function is called with 'new', the 'this' inside that function will point at
the object that 'new' creates

2. If a funtion is called with 'call()' or 'apply()', the 'this' inside that function
call will point at the object that is specified as the first argument

3. If a function is called via a context object foo.bar(), the 'this' inside that function
call will point to the context object

// Where the function was invoked influences how 'this' would get bound
// Parameter bindings are lost when used as a callback function

/************************/

// 'bind' is a method on functions
// It returns a copy of the function where 'this' is set to the
// first argument passed into .bind()

var explicitlySetlogThis = logThis.bind({name: 'me'}); // returns a copy of logThis
explicitlySetlogThis(); // {name: "me"}

/*********************** PROTOTYPE CHAINS ***********************/

var gold = {a: 1};
var rose = Object.create(gold) // has an ongoing lookup-time delegation
console.log(rose.a) //  falls through told var gold & returns 1


/*********************** Object Decorator Pattern ***********************/

A function that accepts an object and auguments it with some extra propertities and functionality
i.e. primitive values, objects, functions
The updates happen AFTER the base object has been created

1) Because decorators can add the same functionality to any target object you pass in, they help you
DRY (Don't Repeat Yourself!) up your code. Instead of repeating the same lines of code for each specific
object you want to decorate, you set up the decorator once and feed it objects at will.

2) Because decorators extend the functionality of objects that already exist, they add a degree of flexibility
to your code. You don't have to instantiate every object with all the properties it might ever need; you can
addthose properties later.

3) Likewise, because decorators work with already-existing objects, they let you alter your program's
functionalitywithout having to update all of the underlying codebase. In a huge codebase, this is a major asset.

Ex: var Class = function(obj, property) {}


/*********************** CLASS ***********************/

// Class builds the object it is going to augment
// Class is a construct that is capable of building a fleet of similar object that all conform
// to the same interface (aka Constructor function)

Ex: var Class = function(property) {
  obj.property = {}
  return obj;
}

// Functions are allowed to have other properties as well, just like objects

/*

A class in JavaScript is a construct that can create any number of similar objects.
The constructor is a function that actually performs the work of creating the object
that conforms to a class. An object that was created from a class constructor is called
an "instance" of a class. Therefore, calling the constructor function to create a class
instance is called "instantiating" an object.

*/

/*********************** FUNCTIONAL CLASS CONSTRUCTORS ***********************/

//Functional class constructor that uses a shared methods:

var Mouse = function(tailLength, color) {  // class name is capped
  var obj = {  // creates an object
    tailLength: tailLength,
    color: color
  };
  extend(obj, Mouse.properties);  // function adds properties to the object
  return obj;  //returns object
}

Mouse.properties = {  // methods are stored as property on the class
  squeak: function() { alert('Squeak!'); }
};

// The functional class with shared methods pattern uses extend() to add a set
// of properties to a newly created object in the constructor


/*********************** PROTOTYPAL CLASS ***********************/

// Whenever you use an object literal to create an object, you dont get to define what the prototype
// of that new object is going to be ** ^Object.create() does **

Ex:
var Class = function(property) {
  // Class.methods is used a prototype for every new instance
  // Failed look-up instances will fall through to Class.methods
  var obj = Object.create(Class.methods);
  obj.property = property;
  return obj;
}

Class.methods = {
  method: function() {}
}

// Steps for creating a class in this prototypal pattern:
// 1. function that creates the instances
// 2. line in the function that generates the new instance object
// 3. a delegation from the new object to some prototype object
// 4. some logic for augmenting the object with properties that makes it unique from all the other objects in the same class

Ex:
var Class = function(property) {
  var obj = Object.create(Class.prototype);
  obj.property = property;
  return obj;
}

Class.prototype.method = function() {}
// Prototype can be used instead to store all the methods (avilable on every function)
// Imagine the .prototype object as a freely provided object for storing things
// with no additional special characteristics

// The prototypal class pattern adds properties directly to the class prototype.
// Then, the class constructor uses Object.create() to designate the class prototype
// as the fallback object for the newly created object. So when the class instance
// doesn't have a property, it will delegate the failed lookup to the class prototype.

// Prototypes come with a .constructor property which points back to the function it came attached to
// There is thus a mutual linking between any new function and the prototype object

Ex:
Class.prototype.constructor = Class
newObj instanceof Class
// Checks to see if the right operands .prototype object can be found anywhere in the left operands prototype chain

Instantiating Ex:
var plane = Airplane(0)
// SHOULD HAPPEN WITHOUT THE 'new' KEYWORD


/*********************** PSUEDOCLASSICAL PATTERNS ***********************/

Ex:
var Class = function(property) {
  this.property = property  // should assign properties to 'this'
}  // should NOT create or return an object

var newObj = new Class(property);

// Uses the 'new' keyword to create new class instances
// Behind the scene, 'new' sets 'this' to the value returned by Object.create(class.prototype)
// and, at the end of the constructor, returns 'this'


/*********************** SUPERCLASS ***********************/

// Other classes will use the SUPERCLASS as its starting point

Ex:

var SuperClass = function(property) {
  this.property = property;
}

Class.prototype.method1 = function() {}

var IncorrectSubclass = function(property) {
  return new SuperClass(property);
  // New instance of the SuperClass is created & is therefore A BIG NONO
};

var CorrectSubClass = function(property) {
  SuperClass.call(this, property);
}

CorrectSubClass.prototype = Object.create(SuperClass.prototype);
CorrectSubClass.prototype.constructor = CorrectSubClass;
CorrectSubClass.prototype.method2 = function() {}


/*********************** PROTOTYPAL CHAINS /***********************

/*
In JS, in which most things are objects, objects inherit their properties from a prototype.
All objects have a property that links to a prototype object, and the prototype object itself
has a property with a link to the prototype object, forming a chain all the way up to the null object
(which does not have a prototype).

This prototype chain impacts property lookup at runtime: if an instance of an object does not
have the property we're trying to access, but does have a prototype, then the prototype will be
searched for the property. This property lookup will continue as far up as the prototype chain
as we have to go (potentially to the progenitor null object) to locate the property or declare
that it does not exist
*/


/*********************** EXECUTION CONTEXTS ***********************/

/*
Execution contexts are created only when the program executes.

If the function is invoked several times, the same single lexical scope will
  result in several different execution contexts

After a program is initally executed and the JS intepreter enters into a global context,
  any invocation of a function creates a new execution context

Invoking a function in your program causes:
  1) a new execution context to be created
  2) the interpreter's lookup focus moves to the newly created execution context

Lexical scopes are determined as soon as you type your code
*/


/*********************** EXPRESSIONS ***********************/

/*
Expressions are arrangements of literals, variables, and/or operators,
and/or operators, which together tell your computer how to take a small
step forward

Expressions evalutes/returns a value
*/


/*********************** SCOPES & CLOSURES ***********************/
Declarations (.i.e. variables and functions) are hoisted to the top due to the compilation step
//function expressions return undefined if called before it is able to be executed
// Ex:  x();
// var x = function();

Scopes are created by functions


exampleObj = {
  var a = 10;

  function outer() {
    var b = 20;

    var inner = function() {
      a++;
      b++;
      console.log(a);
      console.lob(b);
    };
    return inner;
   }
}

var innerFun = outer();

innerFun(); //returns 11, 21;

var innerFn2 = outer();

innerFn2(); // returns 12, 21
// var b remains the same because each time the function is called, a copy of
// the function's variables is created at the time it is being called


// This logs 10 copies of '10'
// setTimeout is priting what its scope remembers:
// At the end of the loop, the last value of i the scope remembers is 10
// and therefore prints '10' 10 times.

exampleObj2 = {
  var 1;
  var print = function() {
    console.log(i);
  };
  for (i = 0; i < 10; i++) {
    setTimeout(print, 1000);
  }
}

// This logs 1, 2, 3... 10
// A function is created to keep track of the value i so that
// setTimeout can refer to it

exampleObj2 = {
  var 1;
  for (i = 0; i <10; i++) {
    (function() {
      var currentValueOfI = i;
      setTimeout(function() {
        console.log(currentValueOfI);
      }, 1000);
    })();
  }
}


/**************** REGULAR EXPRESSIONS ****************/

** NOTE: Use backslashes to grab literal characters **

META-CHARACTERS:
\d //any digit 0 - 9
\w //word: capital A - Z, lowercase a - z, 0 - 9
\W //anything that's not a word character (i.e. \w)
.  //any character what so ever (NOTE: \. means literal dot)
*  //wild-card quantifier: 0 or more
.* //common way to match file names (i.e. rainbow.*)
\s //any white space (i.e. space, tab)
\S //anything that's not white space (i.e. \s)


QUANTIFIERS:
//meta-characters that modify the previous character in a regular expression & say how many of those things you want in a row
*  //0 or more
+  //1 or more
?  //0 or 1 EX: (searching for: colou?rs? --> color, colors, colour, colours)
{min, max}
{n} //(i.e. \w{5}\s --> words with 5 characters and a space)

POSITION:
//meta-characters that matches the position of a character in the string itself
^  //beginning of a line (i.e. ^\w+ --> words at the beginning of a line with one or more characters)
$  //end of a line (i.e. ^\w+$ --> searches for lines that only have one word)
\b //word boundary (i.e. \b\w{4, 6}\b --> words with 4-6 characters)

CHARACTER CLASSES:
//stuff that appears in between [] are all literatals acting as an ALTERNATION function: having an OR-like operation
[abc] --> matches a, b, or c
[-.]  --> matches dash or dot (. is no longer a meta-character within [], but a dot)

Special characters in character classes:
-  // [a-z], if the dash is not the first character, it does NOT mean a literal character
^  // [^0-5] if the carrot is the FIRST character within the bracket, it matches everything EXCEPT whatever is in the bracket

[A-za-z]+ --> Any lowercase or uppercase character followed by 1 or more characters
\b[A-z][a-z]*\b --> Matches words that have their first letter capitalized
//EX: to match all three of the following phone numbers: 312-884-3234, (231)234-1259, 321.343.3234
//You can use the following regEx: \(?\d{3}[-.)]\d{3}[-.]\d{4}

(|) //plays similar role in alternation
[\w.]+@\w+\.(net|com|edu) --> match emails
