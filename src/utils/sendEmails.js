import nodemailer from "nodemailer";

export const sendMail = async (mailTo, mailText, mailSubject) => {
  const Transport = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
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
