// JWT
// JSON Web Tokens
/*
URL safe way to transmit data between two parties - usually used for authentication and authorization in web applications

- JWT is a string token given to user after they successfully login
*/

import jwt from "jsonwebtoken";
async function encryptData()
{
    try
    {
        let userData = {
            name : "MFK",
            age : 21,
            isAlive : true
        }

        let mySec = "EVP@CFI1@3";

        let token = await jwt.sign(userData, mySec, {expiresIn : 300});
        console.log(token);
    }
    catch(error)
    {
        console.log(error);
    }
}
// encryptData();

async function decryptData()
{
    try
    {
        let encryptKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTUZLIiwiYWdlIjoyMSwiaXNBbGl2ZSI6dHJ1ZSwiaWF0IjoxNzYzNjMyMTIzLCJleHAiOjE3NjM2MzI0MjN9.F3iWYERHTnnMAYQ41PYuFndgI58GLyCmQMCVYMiq3Hs";

        let secretKey = "EVP@CFI1@3";

        let userData = await jwt.verify(encryptKey, secretKey);
        console.log(userData);
    }
    catch(error)
    {
        console.log(error);
    }
}
decryptData();