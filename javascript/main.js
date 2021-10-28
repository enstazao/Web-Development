// Alert Produces on Chrome
// alert('Hello World');

// Output on Console
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is an warning');

// Variables
// var, let, const  var is globally scoped , use let & const
// let age = 30;
// age = 31;
// console.log(age);

// let score;
// score = 10;

// console.log(score);



// Data Types
// Strings, Numbers. Boolean, Null, undefined

// const name = 'John';
// const age = 13;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;      // Also Undefined

/*
console.log(typeof age);
console.log(typeof name);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
*/

// const name = 'John';
// const age = 13;


// Concatenation
// console.log('My Name is ' + name + ' I am ' + age); 

// Template Strings
// const hello = `My Name is ${name} and I am ${age}`;
// console.log(hello);

// const s = 'technolgy, computers, It, code';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(','));


// Arrays - variable that hold multiple values
// const Numbers = new Array(1, 2, 3, 4, 5);
// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangoes');

// fruits.unshift('strawberies');
// fruits.pop();
// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('oranges'));
// console.log(fruits);

// Object Literals
/*
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Booston',
        state: 'MA'
    }
}
*/
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
// const { firstName, lastName, address: { city }} = person;
// console.log(firstName);

// person.email = 'John@gmail.com'
// console.log(person);

// Arrays of Object
/*
const todos = [
    {
        id: 1,
        text: 'Take our trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];
*/
// console.log(todos[1].text);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// For Loops
// for (let i = 0; i < 10; i++) {
    // console.log(`For Loop Number ${i}`);
// }

//  While Loops
/*
let i = 0;
while(i < 10) {
    console.log(`While Loop number ${i}`);
    i += 1;
}
*/
/*
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}*/
/*
for (let todo of todos) {
    console.log(todo.text);
}

// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});
// console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
console.log(todoCompleted);



// Conditionals
const x = 10;
if (x === 10) {
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater then 10');
} else {
    console.log('x is not 10');
}

if (x > 5 || x === 10) {
    console.log('x is greater then 5');
}
Also we have a && operator
*/
// Ternary Operator
/*
const x = 10;
const color = x > 10 ? 'red' : 'yellow';
console.log(color);
*/

// Switches
/*
const color = 'yellow';
switch(color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is Blue');
        break;
    default:
        console.log('Color is Something else');
        break;
}
*/

// Functions
/*
function addNums(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
}

addNums();

function multiplyNums(num1, num2) {
    return num1 + num2;
}
const result = multiplyNums(4, 5);
console.log(result);
*/
// Arrow Functions
// const addNums = (num1, num2) => {
//     console.log(num1 + num2);
// }
// addNums(1, 2);
/*
const addNums = (num1, num2) => num1 + num2;
const result = addNums(1, 2); 
console.log(result);


const addNums = num1 => console.log(num1  + 5);
addNums(1);
*/
// Constructor Function
/*
function Person(firstName, lastname, dob) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastname}`;
}

// Instantiate the Object
const person1 = new Person('John', 'Doe', '4-3-2002');
const person2 = new Person('Jawad', 'Ahmed', '12-07-2002');
// person1.getBirthYear();
console.log(person1.getFullName());
// console.log(person2.dob.getFullYear());


// Classes
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person1 = new Person('John', 'Doe', '4-3-2002');
const person2 = new Person('Jawad', 'Ahmed', '12-07-2002');
console.log(person1.getFullName());
*/