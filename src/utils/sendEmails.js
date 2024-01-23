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
    from: "Bangladesh Now <info@teamrabbil.com>",
    to: mailTo,
    subject: mailSubject,
    text: mailText,
  };

  return await Transport.sendMail(mailOptions);
};


