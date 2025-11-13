// File System
import fs from "fs/promises";
import rl from "readline-sync";



async function createFolder()
{
    try
    {
        let folderName = rl.question("Enter the folder name: ");
        await fs.mkdir(folderName);
        console.log(`Folder created with the name '${folderName}'`);
    }
    catch(err)
    {
        console.log(err);
    }
}
createFolder();


async function delFolder()
{
    try
    {
        let name = rl.question("Enter the folder name you want to delete: ")
        await fs.rmdir(name);
        console.log(`${name} folder was deleted.`);
    }
    catch(err)
    {
        console.log(err);
    }
}
delFolder();

async function createFile()
{
    try
    {
        let name = rl.question("Enter the file name with extension: ");
        let content = rl.question("Enter the content of the file: ");
        await fs.writeFile(name, content);
        console.log(`Created a file ${name}`);
    }
    catch(err)
    {
        console.log(err);
    }
}
createFile();



async function delFile()
{
    try
    {
        let name = rl.question("Enter the file name you want to delete: ");
        await fs.rm(name);
        console.log(`Deleted a file ${name}`);
    }
    catch(err)
    {
        console.log(err);
    }
}
delFile();