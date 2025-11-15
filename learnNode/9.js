// OS modules task
import ck from "chalk";
import os from "os"

console.log(ck.bold.hex('#41fdfe')(`========================================`));
console.log("\t🖥️",ck.green(`SYSTEM INFO CLI TOOL`));
console.log(ck.bold.hex('#41fdfe')(`========================================\n`));


console.log("📌",ck.yellow("Platform:"),os.platform());
console.log("📌",ck.yellow("OS Type:"),os.type());
console.log("📌",ck.yellow("Release:"),os.release());
console.log("📌",ck.yellow("Architecture:"),os.arch());
console.log("📌",ck.yellow("Hostname:"),os.hostname());

// CPU Info
console.log("\n\n🧠",ck.magenta("CPU Info"));
console.log(ck.magenta("Cores:"),os.cpus().length);
console.log(ck.magenta("Model:"),os.cpus()[0].model);

// Memory Info
console.log("\n\n💾",ck.blue("Memory Info"));
console.log(ck.hex('#000b83ff')("Total Memory:"),(os.totalmem()/(1024**3)).toFixed(2),"GB");
console.log(ck.hex('#000b83ff')("Free Memory:"),(os.freemem()/(1024**3)).toFixed(2),"GB");

// Network Interfaces
console.log("\n\n🌐", ck.hex('#008f02ff')("Network Interfaces"));
console.log(ck.hex('#007602ff')("Interface (Wi-Fi):"), os.networkInterfaces().lo[1].address);
console.log(ck.hex('#007602ff')("Interface (Loopback Pseudo-Interface 1):"), os.networkInterfaces().lo[0].address);
console.log(ck.hex('#007602ff')("Interface (vEthernet (WSL (Hyper-V firewall))):"), os.networkInterfaces().eth0[0].address);

// Uptime
console.log("\n\n⌛",ck.hex('#c85858ff')("Uptime"));
console.log(ck.hex('#da3838ff')("Uptime (Seconds):",(os.uptime()/(60*60)).toFixed(2),"hours"));

// Directories
console.log("\n\n🏠",ck.hex('#39d9f5ff')("Home Directory:",os.homedir()));
console.log("📂",ck.hex('#39d9f5ff')("Temp Directory:",os.tmpdir()));

console.log("\n\n✔️",ck.hex('#008f02ff')("System Info Retrieved Successfully!"));


// This is git streak