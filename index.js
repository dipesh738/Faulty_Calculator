/* a faulty calculator using javaScript
 
This Calculator does the following :
1. It takes two numbers as input from the user.
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operations 10% of the times
*/

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function expo(a, b) {
  return a ** b;
}
function mul(a, b) {
  return a * b;
}

let a = 10;
let b = 5;

if (Math.random() < 0.1) {
  console.log("addition of two number is", sub(a, b));
  console.log("multiplication of two number is", sum(a, b));
  console.log("substraction of two number is ", div(a, b));
  console.log("Divison of two number is", expo(a, b));
} else {
  console.log("addition of two number is", sum(a, b));
  console.log("multiplication of two number is", mul(a, b));
  console.log("substraction of two number is ", sub(a, b));
  console.log("Divison of two number is", div(a, b));
}
