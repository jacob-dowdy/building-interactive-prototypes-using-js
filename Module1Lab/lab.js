var userName = window.prompt("Please enter your name.");

var greetingParagraph = document.getElementById("greeting");

greetingParagraph.innerHTML += ", " + userName;

var num1 = parseInt(window.prompt("Enter a number"));
var num2 = parseInt(window.prompt("Enter another number"));

var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");

operand1.innerHTML += num1;
operand2.innerHTML += num2;

var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modResult = num1 % num2;

document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
document.getElementById("subtraction").innerHTML = num1 + " minus " + num2 + " is " + difference;
document.getElementById("multiplication").innerHTML = num1 + " times " + num2 + " is " + product;
document.getElementById("division").innerHTML = num1 + " divided by " + num2 + " is " + quotient;
document.getElementById("modulus").innerHTML = "The remainder of " + num1 + " divided by " + num2 + " is " + modResult;