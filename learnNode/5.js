// All methods
import fs from "fs/promises";

async function allMethods()
{
    try
    {
        let folderName = "TEST";
        let fileName = "mfk.txt";
        let renameFile = "fouzu.txt";
        let fileContent = "I am MFK";
        let path = "/home/fouzan/tryNode.js";

        // 1. create folder
        // await fs.mkdir(folderName);
        // console.log("Folder created");

        // 2. delete folder
        // await fs.rmdir(folderName);
        // console.log("Folder deleted");

        // 3. file created
        // await fs.writeFile(fileName, fileContent);
        // console.log("File created and content added");

        // 4. read file
        // let output = await fs.readFile(fileName, "utf-8");
        // console.log(output);

        // 5. rename files
        // await fs.rename(fileName, renameFile);
        // console.log("File renamed");

        // 6. delete files
        // await fs.unlink(renameFile);
        // console.log("File deleted");

        // 7. list files
        // let list = await fs.readdir(path);
        // console.log(list);

        // 8. update file
        await fs.appendFile(fileName, "\nHello hunny bunny toko toko.");
        console.log("File updated");
    }
    catch(error)
    {
        console.log(error);
    }
}

allMethods();