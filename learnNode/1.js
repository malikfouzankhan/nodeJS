import rl from "readline-sync";

let name = rl.question("Enter your name: ");
let age = rl.questionInt("Enter your age: ");
let gender = rl.question("Enter your gender [M/F]: ");
if(gender == 'm' || gender == 'M' || gender == 'male' || gender == 'Male')
{
    gender = 'boy';
}
else if(gender == 'f' || gender == 'F' || gender == 'female' || gender == 'Female')
{
    gender = 'girl';
}
else
{
    console.log("Invalid Input!!!");
}
let city = rl.question("Enter your city: ");
let country = rl.question("Enter your country: ");
let email = rl.questionEMail("Enter your mail ID: ");
let phone = rl.questionInt("Enter your phone number: ");
let occupation = rl.question("Enter your occupation: ");
let hobby = rl.question("What is your hobby?: ");
let lang = rl.question("Your favourite programming language: ");
let exp = rl.question("Years of experience in coding: ");
let food = rl.question("Your favourite dish: ");
let movie = rl.question("Which is your favourite movie?: ");
let color = rl.question("Which color is your favourite?: ");
let student = rl.question("Are you a student? [y/n]: ");
if(student == 'y' || student == 'Y' || student == 'yes' || student == 'Yes')
{
    student = 'student';
}
else if(student == 'n' || student == 'N' || student == 'no' || student == 'No')
{
    student = 'not a student';
}
else
{
    console.log("Invalid Input!!!");
}
let coding = rl.question("Do you like coding? [y/n]: ");
if(coding == 'y' || coding == 'Y' || coding == 'yes' || coding == 'Yes')
{
    coding = 'love';
}
else if(coding == 'n' || coding == 'N' || coding == 'no' || coding == 'No')
{
    coding = 'hate';
}
else
{
    console.log("Invalid Input!!!");
}
let goal = rl.question("What do you want to achieve in your life?: ");
let pet = rl.question("Do you have a pet? (If yes, name it else type 'NO'): ");
let genre = rl.question("Your favourite music genre: ");
// let smoke = rl.question("Did you stop smoking?: ");

console.log(`\n----------USER PROFILE----------
Hello Node.js, my name is ${name}. I am ${age} years old and i am a ${gender}.
I am a resident of ${city}, ${country}.
I am a professional ${occupation} while also being a ${student} and my favourite programming language is '${lang}' with an experience of ${exp} years because I ${coding} coding.
Apart from my passion towards coding, I also like to ${hobby} in my free time. I am a foodie and I love ${food} while i binge watch ${movie}. You see me wearing ${color} color because I love it. I love ${genre} music.
My personal goal in life is: ${goal}.

To get in touch with me, here are my details:
E-mail: ${email}
Phone: ${phone}`);