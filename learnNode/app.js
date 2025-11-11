// const readLine = require("readline-sync"); // before 2015
import readline from "readline-sync"; // after 2015

let name = readline.question("Enter your full name: ");
let age = readline.questionInt("Enter your age: ");
if(age > 100)
{
    console.log("Invalid age: Please enter correct age");
    // readline.questionInt("Enter your age: ");
}
let email = readline.questionEMail("Enter your mail ID: ");
// let phone = readline.questionInt("Enter your phone number: ");
let college = readline.question("Enter your college name: \n\n");

console.log(`Hello, I am ${name}.`);
console.log(`My age is ${age}`);
console.log(`My E-mail ID is: ${email}`);
// console.log(`My phone number is: ${phone}`);
console.log(`My college is: ${college}`);