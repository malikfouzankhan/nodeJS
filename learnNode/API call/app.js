import axios from "axios";

// async function apicall()
// {
//     try{
        
//     let resp = await axios.get("https://ai.suhail.app");
//     console.log(resp.data);
//     console.log(resp.statusText);
//     let resp2 = await axios.get("https://ai.suhail.app/test");
//     console.log(resp2.data);
//     console.log(resp2.statusText);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }
// apicall();

async function callApi()
{
    try{
        let out = await fetch("https://ai.suhail.app");
        let final = await out.json();
        console.log(final.msg);
    }
    catch(err)
    {
        console.log(err);
    }
}
callApi();