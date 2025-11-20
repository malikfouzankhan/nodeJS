// bcrypt
/*
bcrypt is a node module to encrypt sensitive information such as passwords into an unreadable code.
*/
import bcrypt from "bcrypt";
async function hash()
{
    try
    {
        const pass = "Iam Khan";
        console.log(pass);

        // const hashed = await bcrypt.hash(pass, 10);
        // console.log(hashed);

        let comp = await bcrypt.compare(pass, "$2b$10$DZIdzeMrUCQUX.ZD10hf9uAK9lg6oqNyMJinmfXXd3J7pF11pqMpm");
        if(comp)
        {
            console.log("Login Successful");
        }
        else
        {
            console.log("Invalid Password!!");
        }
    }
    catch(error)
    {
        console.log(error);
    }
}
hash();