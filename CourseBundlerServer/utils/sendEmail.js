import {createTransport} from "nodemailer";

export const sendEmail = async(to,subject,text)=>{
    const transporter = createTransport({
        service:"gmail",
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure:true,
        logger:true,
        secureConnection:false,
        debug:true,
        auth: {
          user:process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
    });

   await transporter.sendMail({
       to,
       subject,
       text,
       from:"hk5425901@gmail.com"
   })
}