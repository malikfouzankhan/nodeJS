// readline-sync and chalk
import ck from "chalk";
import rl from "readline-sync";

console.log(ck.blue("👋Welcome to the Simple JS App!\n"));
let name = rl.question(ck.green("Enter your name: "));
let age = rl.questionInt(ck.yellow("Enter your age: "));
let coding = rl.question(ck.blue("Do you like coding? [y/n]: "));
if(coding == 'y' || coding == 'Y')
{
    coding = 'Yes 😄';
}
else
{
    coding = 'No 😑';
}
console.log(ck.magenta(`--- Summary ---`) + (`
Name: ${name}
Age: ${age}
Likes Coding: ${coding}`) + 
    
ck.blue(`Thanks for using this program, have a great day! 🚀`));