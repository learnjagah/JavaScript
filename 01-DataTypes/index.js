console.log('Hello World');

var num = 10;
var s  = "LearnJagah";
var isApplicable  = false;
var ud;

// var num = 'String'
console.log(typeof num);
console.log(typeof s);
console.log(typeof isApplicable);
console.log(typeof ud);

var student = {
    "id": 123456,
    "name": "Student 1",
    "grade": "X"
}

console.log(typeof student);
console.log(student.id);
console.log(student.grade);

const mySymbol = Symbol('description');

console.log(typeof mySymbol)

//What is function
//A block of code that can be reused again and again
//If you give some input to it, It will process the input and provide output

function addTwoNumbers(a, b){
    return a + b;
}

console.log(addTwoNumbers(2, 3));
console.log(addTwoNumbers(7, 3));

function sayHello(name){
    console.log("Hello "+name +", Welcome to the LearnJagah")
}

sayHello('Shiva');
sayHello('Raju');