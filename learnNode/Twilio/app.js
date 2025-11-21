import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

const SID = process.env.ACC_SID;
const authToken = process.env.AUTH_TOKEN;

const phone = "+13158722394";

const sender = twilio(SID, authToken);
async function SMS()
{
    try {
        let message = await sender.messages.create({
            from: phone,
            to: "+919391022947",
            body: "Hey, this is Malik Fouzan, willing to meet you."
        });
        console.log("Message sent", message.sid);
    } catch (error) {
        console.log(error);
    }
}
SMS();