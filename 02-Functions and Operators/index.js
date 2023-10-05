//Function Declaration
function addTwoNumbers(a, b){
    return a + b;
}

//Function Expression
const cubeOfNumber = function(a){
    return a * a * a;
}

//Arrow Function
const findSquare = a => a * a;

const findSum = (a, b) => a + b;

const finSumOfSquares = (a, b) => {
    var squareOfA =  a * a;
    var squareOfB =  b * b;

    return squareOfA + squareOfB;
}

console.log(addTwoNumbers(2,3));
console.log(cubeOfNumber(3));
console.log(findSquare(2));
console.log(findSum(10, 20));
console.log(finSumOfSquares(2, 3));

//Arithmetic Operator
console.log('//Arithmetic Operator');
var a = 14;
var b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b);
console.log(a % b);
console.log(a++);
console.log(a--);
console.log(++a);
console.log(--a);

//Assignment Operator
console.log('//Assignment Operator');
var x = 5; //Assignment Operator
var y = 9;
x += y; // x= x + y;
console.log(x);
x -= y; // x= x - y;
console.log(x);
x += y; // x= x + y;
console.log(x);
x /= y; // x= x / y;
console.log(x);
x %= y; // x= x % y;
console.log(x);
x *= y; // x= x ** y;
console.log(x);


//Comparision Operator
var a = 10;
var b = '10';
console.log('//Comparision Operator');
console.log( a == b); //only value
console.log( a === b); // both value and type

var x = 23;
var y = '23';
console.log( x != y); //only value
console.log( x !== y); // both value and type

console.log( x > a);
console.log( x < a);
console.log( x >= a);
console.log( x <= a);

console.log( a > b ? 'A is Greater' : a < b ? 'A is Less' : 'A and B are equal');

//Logical Operators
// true true => true
// true false => false
// false true => false
// false false => false
var p = 8;
var z = 43;
if(p > 25 && z > 25){
    console.log('Eligible for concert')
}
// true true => true
// true false => true
// false true => true
// false false => false
if( p > 25 || z > 25){
    console.log('Eligible for movie')
}

if(!(p > 25 && z > 25)){
    console.log('Eligible for park');
}

//String Value
var str1 = 'String 1';
var str2 = 'String 2'
console.log(str1 + str2);
console.log(str1 == str2);
console.log(str1 < str2);

//String Methods
console.log(str1.length);
console.log(str1.charAt(5));
// console.log(str1.charAt(9));

var student = ' Jhone Doe ';
console.log(student.trim());
console.log(student.trimEnd());
console.log(student.trimStart());


