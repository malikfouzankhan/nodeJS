// nodemailer
/*
Used to send mails through node itself.
*/
import mailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
async function mails()
{
    try
    {
        let transport = mailer.createTransport({
            service : "gmail",
            auth : {
                user : process.env.EMAIL,
                pass : process.env.PASS
            }
        });

        const info = await transport.sendMail({
            from: process.env.EMAIL,
            to:["abdullahjawed2021@gmail.com", "suhail@code.in"],
            subject: "An Email sent using nodemailer",
            text: "Hello friends, Chai Peelo aur coding karo!!"
        });
        console.log("Message sent:", info.messageId);
    }
    catch(error)
    {
        console.log(error);
    }
}
mails();