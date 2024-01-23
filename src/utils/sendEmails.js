import nodemailer from "nodemailer";

export const SendEmail = async (mailTo, mailText, mailSubject) => {
  const Transport = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false, // Adjust this based on your mail server configuration
    auth: { user: "info@teamrabbil.com", pass: "~sR4[bhaC[Qs" },
    tls: { rejectUnauthorized: false },
  });

  const mailOptions = {
    from: "biplobemon5210@gmail.com",
    to: mailTo,
    subject: mailSubject,
    text: mailText,
  };

  return await Transport.sendMail(mailOptions);
};


// Instractor code


// import nodemailer from 'nodemailer';
// export async function SendEmail(EmailTo,EmailText,EmailSubject){

//    let Transport= nodemailer.createTransport({
//         host:"mail.teamrabbil.com",
//         port:25,
//         secure:false,
//         auth:{user:"info@teamrabbil.com", pass:"~sR4[bhaC[Qs"},
//         tls:{rejectUnauthorized:false}
//     })

//     let MailOption={
//        from:"Next JS News Portal <info@teamrabbil.com>",
//        to:EmailTo,
//        subject:EmailSubject,
//        text:EmailText
//     }
//     return await Transport.sendMail(MailOption)

// }
