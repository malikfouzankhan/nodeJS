// dotenv
/*
dotenv is a Node.js package that loads environment variables from a .env file into process.env

This is useful because:
    - You don't want secrets (API keys, DB passwords) inside your code.
    - You want different configs for dev, staging, production.
    - You want clean, maintainable configuration.

INSTALLATION
- npm i dotenv
*/

import dotenv from "dotenv";
dotenv.config();

let name = process.env.NAME;
let mail = process.env.EMAIL;
let phone = process.env.PHONE;
let pass = process.env.PASSWORD;
let clg = process.env.COLLEGE;

console.log(name, clg, mail, pass, phone);