import ck from "chalk";
import rl from "readline-sync";

console.clear();
console.log(ck.hex("#E1306C").bold("=============================="));
console.log(ck.hex("E1306C").bold("📸   Instagram Login Page   📸"));
console.log(ck.hex("#E1306C").bold("=============================="));


// username
const username = rl.question(ck.blue("👨‍🦰 Enter your username: "));

// password
const password = rl.question(ck.yellow("🔒 Enter your password: "), {
    hideEchoBack: true
});

console.log(ck.gray("\n\nChecking credentials...\n"));


if(password == "fouzan" && username == "MFK")
{
    console.log(ck.green("✅Login Successful!"));
    console.log(`Welcome back, ${username} 💫`);
}
else
{
    console.log(ck.red("❌Login Failed!"));
    console.log("Invalid username or password.");
}

console.log(ck.magenta("\n\nThank you for using Instagram CLI 💖"));
