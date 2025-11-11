import rl from "readline-sync";

let name = rl.question("👨‍🦰 Enter your name: ");
let age = rl.questionInt("🎂 Enter your age: ");
let like = rl.question("💻 Do you like coing? [y/n]: ");

console.log("\n--- Summary ---");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
if(like == 'y')
{
    console.log(`Likes coding: Yes`);
}
else
{
    console.log(`Likes coding: No`);
}