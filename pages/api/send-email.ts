import * as nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

const transporter = nodemailer.createTransport({
  host: 'smtp.forwardemail.net',
  port: 465,
  secure: true,
  auth: {
    user: process.env.FORWARDEMAIL_USERNAME,
    pass: process.env.FORWARDEMAIL_PASSWORD,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  const mailData = {
    from: process.env.FORWARDEMAIL_USERNAME,
    to: process.env.FORWARDEMAIL_USERNAME,
    subject: `Message From Portfolio Website`,
    text: message,
    html: `<div>${message}
            <br />
            <br />
            Name: ${name}
            <br />
            Email: ${email}
          </div>`,
  };

  if (req.method === 'POST') {
    try {
      await transporter.sendMail(mailData);
      res.status(200).json({ status: 'Ok' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error sending message' });
    }
  }
}
