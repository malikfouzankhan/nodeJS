// OS Modules in Node.js
/*
Node.js comes with a built-in module called os that provides information about your computer's operating system.

You don't need to install anything - just import it:
ex: import os from "os"
*/

import os, { freemem, hostname, totalmem } from "os";

// identifying which OS
console.log("Platform:",os.platform());

// 
console.log("Architecture:",os.arch());

console.log("CPUs:",os.cpus().length);
let totmem = os.totalmem();
totmem = totmem/8;
totmem /= 1024;
totmem /= 1024
console.log("Total Memory:",totmem,"GB");
let free = os.freemem();
free /= 8;
free /= 1024;
free /= 1024;

console.log("Free Memory:",free,"GB");
console.log("Host Name:",hostname());
console.log("OS Type:",os.type());
console.log("OS Version:",os.release());
let time = os.uptime();
time /= 60;
time /= 60;

console.log("Total Uptime:",time,"hours");