const nodemailer = require("nodemailer");

const sendEmail = async(mailOptions) => {
    const tranporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure : false,
        auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
        }
    });

  let info = await tranporter.sendMail(mailOptions);
   console.log(`Message Sent : ${info.messageId}`);
};

module.exports = sendEmail;

//nodemailer ile async bir fonksiyon oluşturuyoruz. mailoptions
//ile göndermek istediğimiz mailin özelliklerini ayarlıyoruz
